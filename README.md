index.html
An innovative AI platform designed to explore the future of artificial intelligence. Bringing powerful AI tools, creative technology, and intelligent experiences together.
index.html

<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="theme-color" content="#080713">
<title>NEBULA X — Beyond The Future</title>
<meta name="description" content="NEBULA X，探索人工智能的无限可能。">
<style>
*{margin:0;padding:0;box-sizing:border-box}
:root{--bg:#080713;--purple:#a36aff;--blue:#57baff;--text:#f5f1ff;--muted:#aaa5bf}
body{background:var(--bg);color:var(--text);font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;min-height:100vh;overflow-x:hidden}
body:before{content:"";position:fixed;inset:0;pointer-events:none;background:radial-gradient(ellipse at 50% 15%,#552b9b35,transparent 48%),radial-gradient(ellipse at 90% 75%,#174d8730,transparent 40%);z-index:-1}
nav{height:76px;padding:0 7%;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid #ffffff12;backdrop-filter:blur(15px)}
.logo{font-size:25px;font-weight:900;letter-spacing:3px;background:linear-gradient(90deg,#fff,#ad75ff,#54c6ff);background-clip:text;color:transparent}
.navright{display:flex;align-items:center;gap:24px}
nav a{color:#c5bfd6;text-decoration:none;font-size:14px}
.lang{border:1px solid #8c65c5;background:#171126;color:white;padding:9px 15px;border-radius:20px;cursor:pointer}
.hero{text-align:center;padding:110px 20px 80px;max-width:1000px;margin:auto}
.tag{display:inline-block;border:1px solid #a36aff70;border-radius:30px;padding:8px 17px;color:#c69aff;font-size:12px;letter-spacing:2px;background:#a36aff12}
h1{font-size:clamp(48px,9vw,100px);line-height:1.1;letter-spacing:-4px;margin:30px 0 18px;font-weight:900;background:linear-gradient(100deg,#fff 20%,#c18aff 55%,#63caff);background-clip:text;color:transparent}
.subtitle{color:var(--muted);font-size:18px;line-height:1.8}
.actions{display:flex;justify-content:center;gap:15px;margin-top:35px;flex-wrap:wrap}
.btn{padding:14px 27px;border-radius:12px;text-decoration:none;font-weight:700;font-size:14px;cursor:pointer;transition:.25s}
.primary{background:linear-gradient(110deg,#9255ed,#496fe8);color:white;box-shadow:0 0 30px #8054ee50;border:0}
.secondary{border:1px solid #ffffff35;color:white;background:#ffffff08}
.btn:hover,.tool:hover{transform:translateY(-4px)}
.orbit{height:180px;width:180px;border-radius:50%;margin:55px auto 0;background:radial-gradient(circle at 35% 30%,#d4aaff,#7944dc 35%,#17102c 72%);box-shadow:0 0 70px #9757ff65,0 0 140px #5540a333;position:relative}
.orbit:before,.orbit:after{content:"";position:absolute;border:1px solid #b68bff55;border-radius:50%;inset:-25px;transform:rotate(-25deg) scaleY(.35)}
.orbit:after{inset:-48px;transform:rotate(35deg) scaleY(.4)}
.section{padding:65px 7%;max-width:1200px;margin:auto}
.sectionhead{text-align:center;margin-bottom:35px}
.sectionhead h2{font-size:30px;margin-bottom:12px}
.sectionhead p{color:var(--muted);font-size:14px}
.tools{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}
.tool{background:linear-gradient(145deg,#ffffff0d,#ffffff04);border:1px solid #ffffff17;border-radius:18px;padding:25px;min-height:180px;transition:.25s}
.tool:hover{border-color:#a36aff90;box-shadow:0 10px 35px #7845c522}
.tool .symbol{font-size:30px;margin-bottom:17px}
.tool h3{font-size:17px;margin-bottom:10px}
.tool p{color:var(--muted);font-size:13px;line-height:1.7}
.status{display:inline-block;margin-top:17px;color:#bda0ff;font-size:11px;border:1px solid #a36aff45;border-radius:20px;padding:5px 10px}
footer{text-align:center;padding:35px 15px;border-top:1px solid #ffffff12;color:#777187;font-size:12px;line-height:2}
@media(max-width:700px){
 nav{height:65px;padding:0 5%}.logo{font-size:21px;letter-spacing:2px}
 nav a{display:none}.navright{gap:8px}
 .hero{padding:85px 18px 55px}
 h1{letter-spacing:-2px;font-size:54px}
 .subtitle{font-size:15px}
 .orbit{height:135px;width:135px;margin-top:45px}
 .section{padding:48px 5%}
 .tools{grid-template-columns:1fr;gap:13px}
 .tool{min-height:145px;padding:21px}
 .sectionhead h2{font-size:25px}
}
</style>
</head>
<body>
<nav>
 <div class="logo">NEBULA X</div>
 <div class="navright">
  <a href="#home" data-zh="首页" data-ja="ホーム">首页</a>
  <a href="#tools" data-zh="AI工具" data-ja="AIツール">AI工具</a>
  <a href="#about" data-zh="关于我们" data-ja="私たちについて">关于我们</a>
  <button class="lang" id="language">日本語</button>
 </div>
</nav>

<main id="home">
 <section class="hero">
  <span class="tag" data-zh="✦ 下一代人工智能平台" data-ja="✦ 次世代AIプラットフォーム">✦ 下一代人工智能平台</span>
  <h1>NEBULA X</h1>
  <p class="subtitle" data-zh="探索人工智能的无限可能。<br>让创意与科技，在这里相遇。" data-ja="人工知能の無限の可能性を探求。<br>創造性とテクノロジーがここで出会う。">探索人工智能的无限可能。<br>让创意与科技，在这里相遇。</p>
  <div class="actions">
   <a class="btn primary" href="#tools" data-zh="探索 AI 工具 →" data-ja="AIツールを探す →">探索 AI 工具 →</a>
   <a class="btn secondary" href="#about" data-zh="了解 NEBULA X" data-ja="NEBULA X について">了解 NEBULA X</a>
  </div>
  <div class="orbit"></div>
 </section>

 <section class="section" id="tools">
  <div class="sectionhead">
   <h2 data-zh="智能工具中心" data-ja="AIツールセンター">智能工具中心</h2>
   <p data-zh="一个入口，连接更多 AI 创意可能" data-ja="ひとつの入口から、広がるAIの可能性">一个入口，连接更多 AI 创意可能</p>
  </div>
  <div class="tools">
   <article class="tool">
    <div class="symbol">✍️</div>
    <h3 data-zh="AI 智能写作" data-ja="AIライティング">AI 智能写作</h3>
    <p data-zh="辅助创作文章、文案与灵感。" data-ja="文章やコピー、アイデアの創作をサポート。">辅助创作文章、文案与灵感。</p>
    <span class="status" data-zh="即将开放" data-ja="近日公開">即将开放</span>
   </article>
   <article class="tool">
    <div class="symbol">🎨</div>
    <h3 data-zh="AI 图像创作" data-ja="AI画像生成">AI 图像创作</h3>
    <p data-zh="探索视觉设计与创意图像。" data-ja="ビジュアルデザインと画像制作を探求。">探索视觉设计与创意图像。</p>
    <span class="status" data-zh="即将开放" data-ja="近日公開">即将开放</span>
   </article>
   <article class="tool">
    <div class="symbol">🌐</div>
    <h3 data-zh="AI 翻译助手" data-ja="AI翻訳アシスタント">AI 翻译助手</h3>
    <p data-zh="连接不同语言，让沟通更简单。" data-ja="言語の壁を越え、コミュニケーションを簡単に。">连接不同语言，让沟通更简单。</p>
    <span class="status" data-zh="即将开放" data-ja="近日公開">即将开放</span>
   </article>
   <article class="tool">
    <div class="symbol">🧠</div>
    <h3 data-zh="AI 智能助手" data-ja="AIアシスタント">AI 智能助手</h3>
    <p data-zh="让人工智能成为你的创意伙伴。" data-ja="AIをあなたの創造的なパートナーに。">让人工智能成为你的创意伙伴。</p>
    <span class="status" data-zh="即将开放" data-ja="近日公開">即将开放</span>
   </article>
   <article class="tool">
    <div class="symbol">⚡</div>
    <h3 data-zh="效率工具" data-ja="生産性ツール">效率工具</h3>
    <p data-zh="用智能技术提升日常工作效率。" data-ja="スマートな技術で日々の作業効率を向上。">用智能技术提升日常工作效率。</p>
    <span class="status" data-zh="即将开放" data-ja="近日公開">即将开放</span>
   </article>
   <article class="tool">
    <div class="symbol">🚀</div>
    <h3 data-zh="更多创新功能" data-ja="その他の新機能">更多创新功能</h3>
    <p data-zh="持续进化，探索更多未来体验。" data-ja="進化を続け、新しい未来の体験を探求。">持续进化，探索更多未来体验。</p>
    <span class="status" data-zh="持续开发中" data-ja="開発中">持续开发中</span>
   </article>
  </div>
 </section>

 <section class="section" id="about">
  <div class="sectionhead">
   <h2 data-zh="Beyond The Future." data-ja="Beyond The Future.">Beyond The Future.</h2>
   <p data-zh="不止于想象，探索科技的下一个边界。" data-ja="想像を超えて、テクノロジーの新たな境界へ。">不止于想象，探索科技的下一个边界。</p>
  </div>
 </section>
</main>

<footer>
 <div class="logo">NEBULA X</div>
 <p>© 2026 NEBULA X. All rights reserved.</p>
 <p data-zh="探索未来，不止于想象。" data-ja="未来を探求し、想像を超えて。">探索未来，不止于想象。</p>
</footer>

<script>
let japanese=false;
document.getElementById("language").addEventListener("click",()=>{
 japanese=!japanese;
 document.documentElement.lang=japanese?"ja":"zh-CN";
 document.querySelectorAll("[data-zh]").forEach(el=>{
  el.innerHTML=el.getAttribute(japanese?"data-ja":"data-zh");
 });
 document.getElementById("language").textContent=japanese?"中文":"日本語";
});
</script>
</body>
</html>
