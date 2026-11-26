
export async function onRequestPost({ request, env }) {
  try {
    if (!env.AI) {
      return Response.json(
        { error: "AI 服务尚未连接，请检查 Cloudflare AI 绑定。" },
        { status: 503 }
      );
    }

    const body = await request.json();
    const messages = body.messages;

    if (!Array.isArray(messages) || messages.length === 0) {
      return Response.json(
        { error: "请输入问题后再发送。" },
        { status: 400 }
      );
    }

    const safeMessages = messages
      .filter(
        (m) =>
          ["user", "assistant"].includes(m.role) &&
          typeof m.content === "string" &&
          m.content.trim().length > 0
      )
      .slice(-12)
      .map((m) => ({
        role: m.role,
        content: m.content.slice(0, 4000)
      }));

    if (!safeMessages.length || safeMessages[safeMessages.length - 1].role !== "user") {
      return Response.json(
        { error: "请发送一个有效的问题。" },
        { status: 400 }
      );
    }

    const result = await env.AI.run(
      "@cf/meta/llama-3.1-8b-instruct",
      {
        messages: [
          {
            role: "system",
            content:
              "你是 NEBULA X 的 AI 助手。请准确、友善地回答用户。根据用户使用的语言回答，支持中文和日语。"
          },
          ...safeMessages
        ],
        max_tokens: 1024
      }
    );

    return Response.json({
      success: true,
      reply: result.response || "暂时无法生成回答，请稍后重试。"
    });

  } catch (error) {
    return Response.json(
      {
        success: false,
        error: "AI 服务暂时不可用，请稍后重试。"
      },
      { status: 500 }
    );
  }
}
