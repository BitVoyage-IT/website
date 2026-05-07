// service-page.jsx — サービス詳細ページ（5階層構成）

function ServicePage() {
  useRevealOnScroll();
  const details = [
    {
      id: "small",
      num: "1",
      title: "小さな業務改善",
      tagline: "毎日くり返している手作業を減らす",
      scope: "1つの業務の詰まりを解消",
      price: "5〜20万円",
      duration: "※対象業務のみ簡単に整理し、改善まで実施",
      illustration: "assets/illustrations/service-01-small-improvement.png",
      description: "転記・通知・集計・帳票作成・確認作業など、毎日・毎月くり返している手作業を減らします。対象となる業務の流れを簡単に整理したうえで、1つの業務の詰まりを解消します。",
      deliverables: [
        "対象業務の流れの簡易整理",
        "改善内容の実装（または設定）",
        "簡単な運用方法の共有",
      ],
      flow: ["業務内容を確認", "改善ポイントを提案", "実装・設定", "運用への引き渡し"],
    },
    {
      id: "domain",
      num: "2",
      title: "業務領域の整理・自動化",
      tagline: "1つの業務領域を、迷わず回る形に",
      scope: "シフト・受発注・在庫・顧客管理・日報など",
      price: "20〜80万円",
      duration: "※1つの業務領域全体が対象",
      illustration: "assets/illustrations/11-icon-tool-flow.png",
      description: "シフト管理・受発注・在庫・顧客管理（名刺・商談履歴を含む）・日報など、1つの業務領域をまるごと見直します。ツールを入れる前に、いまの流れを書き出すところから始めます。仕組みは、流れに合わせて作ります。",
      deliverablesLabel: "対応内容",
      deliverables: [
        "業務領域の流れの整理",
        "ミスや属人化が起きやすい工程の特定",
        "仕組み・ツールの導入／開発",
        "現場で回る形までの定着支援",
      ],
      flow: ["業務領域のヒアリング", "流れの整理", "仕組みの設計", "ツール導入・実装", "運用への定着"],
    },
    {
      id: "diagnose",
      num: "3",
      title: "業務構造診断パック",
      tagline: "最初から業務全体を整理したい会社向け",
      scope: "現場の流れを広く確認",
      price: "15万円〜",
      duration: "※現場での確認を含みます（広島県内は現場訪問／県外は要相談）",
      illustration: "assets/illustrations/08-icon-search-doc.png",
      description: "「どこから手をつけたらいいか分からない」── そんな会社向けのパックです。現場をひと通り見せていただき、業務全体の見取り図と、改善の優先順位を渡します。効きそうなところから、順に着手できる形でお返しします。",
      deliverablesLabel: "お渡しするもの",
      deliverables: [
        "業務全体の流れの可視化",
        "詰まり・属人化ポイントの一覧",
        "改善の優先順位レポート",
        "次の一手のご提案",
      ],
      flow: ["対象範囲のすり合わせ", "現場ヒアリング・観察", "業務マップの作成", "優先順位の提示"],
    },
    {
      id: "advisor",
      num: "4",
      title: "継続改善サポート",
      tagline: "外部の立場で、改善の優先順位を判断し続ける",
      scope: "毎月、業務の詰まりを確認しながら改善を進行",
      price: "月額 5万円〜",
      duration: "※顧問契約として継続的にご一緒する形",
      illustration: "assets/illustrations/09-icon-support.png",
      description: "毎月、業務の詰まりを一緒に確認しながら、改善の優先順位を外部の立場で見直していく顧問契約です。続けることで、社内で迷う時間や試行錯誤の手戻りが減り、改善が止まらず進みます。",
      deliverablesLabel: "対応内容",
      deliverables: [
        "改善テーマの整理と優先順位決定",
        "小さな業務改善の進行管理",
        "定期的な状況確認と次の打ち手の整理",
        "経営判断に近い視点での助言",
      ],
      flow: ["現状把握と優先順位整理", "毎月の改善進行", "定期的な振り返り", "次の改善テーマ決定"],
    },
    {
      id: "rebuild",
      num: "5",
      title: "業務全体の整理・再構築",
      tagline: "複数部門・複数業務にまたがる大きな見直し",
      scope: "属人化・二重入力・情報分断の整理",
      price: "50万円〜",
      duration: "※プロジェクト形式、規模により個別お見積り",
      illustration: "assets/illustrations/10-icon-growth.png",
      description: "複数の部門・業務にまたがる大きな見直しです。「〇〇さんしか分からない」「同じ情報を別部署でもう一度入れている」「情報があちこちに散らばっている」── このあたりを丸ごとほどき、流れを引き直します。",
      deliverablesLabel: "対応内容",
      deliverables: [
        "業務全体の流れの整理・再設計",
        "情報の分断・二重入力の解消",
        "運用ルール・仕組みの設計",
        "ツール・システムの導入／構築",
        "運用への定着支援",
      ],
      note: "※大きな改善も対応可能ですが、まずは一部から段階的に進めることをおすすめしています。",
      flow: ["対象範囲のすり合わせ", "現状の業務整理", "改善方針の設計", "段階的な実装", "運用への定着支援"],
    },
  ];

  const cases = [
    {
      title: "受注・連絡業務",
      illustration: "assets/illustrations/04-icon-mail-person.png",
      problem: "手作業の個別送信で、時間とミスが発生",
      result: <>一括送信＋個別差し込みで、作業を<span className="marker">大幅削減</span></>,
    },
    {
      title: "計算・集計業務",
      illustration: "assets/illustrations/05-icon-chart-calc.png",
      problem: "外部ソフト依存で、コストと時間が増加",
      result: <>内製化で、作業時間とコストを<span className="marker">削減</span></>,
    },
    {
      title: "製造工程の管理",
      illustration: "assets/illustrations/06-icon-gears-checklist.png",
      problem: "工程のばらつきと属人化が常態化",
      result: <>仕組み化と履歴一元管理で、<span className="marker">再現性のある工程</span>に</>,
    },
    {
      title: "情報管理・業務整理",
      illustration: "assets/illustrations/07-icon-folder-flow.png",
      problem: "情報が分散し、確認に時間がかかる",
      result: <>管理ツールと流れ整理で、<span className="marker">確認時間を削減</span></>,
    },
  ];

  return (
    <div className="page bg-grid">
      <TopNav currentPage="service" />
      <section className="page-hero service-hero">
        <div className="container-narrow fade-up" style={{ textAlign: "center" }}>
          <div className="section-eyebrow">service</div>
          <h1 className="page-hero-title">
            小さく始めて、<span className="underline-hand">無理なく続ける</span>
          </h1>
          <p className="page-hero-lead">
            5つのサービスを、御社の状況に合わせて組み合わせます。<br/>
            まずは1つの業務から始め、必要に応じて領域・全体へ広げていきます。
          </p>
        </div>
      </section>

      {/* サービス一覧（改善ノート行スタイル） */}
      <section className="service-jump-section">
        <div className="container-narrow fade-up">
          <div className="service-five-grid">
            {details.map(d => (
              <a key={d.id} href={`#${d.id}`} className="service-five-row">
                <div className="service-five-tab">{d.num}</div>
                <div className="service-five-content">
                  <h3 className="service-five-title">{d.title}</h3>
                  <p className="service-five-sub">{d.tagline}</p>
                </div>
                <div className="service-five-price">{d.price}</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 各サービス詳細 */}
      {details.map((d, i) => (
        <section key={d.id} id={d.id} className="service-detail-section" style={{ background: i % 2 === 0 ? "var(--paper-2)" : "transparent" }}>
          <div className="container fade-up">
            <div className="service-detail-grid">
              <div className="service-detail-aside">
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                  <span className="num-badge" style={{ width: 44, height: 44, fontSize: 22 }}>{d.num}</span>
                  <h2 className="service-detail-title">{d.title}</h2>
                </div>
                <p style={{ fontFamily: "var(--font-hand)", color: "var(--navy-700)", fontSize: 16, margin: "0 0 20px" }}>
                  — {d.tagline} —
                </p>
                <div className="service-detail-illustration">
                  <img src={d.illustration} alt="" />
                </div>
                <div style={{ background: "var(--yellow-200)", padding: "16px 20px", borderRadius: 10, marginTop: 20 }}>
                  <div style={{ fontSize: 13, color: "var(--navy-900)", fontWeight: 700, marginBottom: 4 }}>価格</div>
                  <div style={{ fontSize: 18, fontWeight: 800, color: "var(--navy-900)" }}>{d.price}</div>
                  <div style={{ fontSize: 12, color: "var(--ink-700)", marginTop: 4 }}>{d.duration}</div>
                </div>
              </div>
              <div className="service-detail-main">
                <p className="service-description">
                  {d.description}
                </p>
                <div style={{ marginBottom: 32 }}>
                  <h3 style={{ fontSize: 15, color: "var(--navy-900)", margin: "0 0 12px", display: "flex", alignItems: "center", gap: 8 }}>
                    <Icon.Doc size={18} /> {d.deliverablesLabel || "お渡しするもの"}
                  </h3>
                  <div style={{ background: "#fff", padding: 20, borderRadius: 10, border: "1px solid var(--line)" }}>
                    {d.deliverables.map(x => (
                      <div key={x} className="check-item"><span className="check-box"></span><span style={{ fontSize: 14 }}>{x}</span></div>
                    ))}
                  </div>
                  {d.note && (
                    <p style={{ fontSize: 13, color: "var(--ink-500)", lineHeight: 1.8, margin: "12px 0 0" }}>{d.note}</p>
                  )}
                </div>
                <div>
                  <h3 style={{ fontSize: 15, color: "var(--navy-900)", margin: "0 0 12px" }}>進め方</h3>
                  <div className="service-flow">
                    {d.flow.map((f, idx) => (
                      <React.Fragment key={f}>
                        <span style={{ padding: "8px 14px", background: "#fff", border: "1px solid var(--line)", borderRadius: 999, fontSize: 13, color: "var(--ink-900)" }}>
                          <span style={{ color: "var(--navy-700)", marginRight: 6, fontWeight: 700 }}>{idx + 1}</span>{f}
                        </span>
                        {idx < d.flow.length - 1 && <span className="service-flow-arrow">→</span>}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* 改善事例（一部） */}
      <section className="section cases-section" style={{ padding: "80px 0", background: "var(--paper-2)" }}>
        <div className="container fade-up">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div className="section-eyebrow">cases</div>
            <h2 className="section-title" style={{ fontSize: 28 }}>
              <span className="marker">改善事例</span>（一部）
            </h2>
            <p style={{ fontSize: 15, color: "var(--ink-700)", lineHeight: 1.9, margin: "12px 0 0" }}>
              こんな業務が、こう変わっています。
            </p>
          </div>
          <div className="cases-grid">
            {cases.map(c => (
              <div key={c.title} className="case-card fade-up">
                <h3 className="case-card-title">{c.title}</h3>
                <div className="case-card-illustration">
                  <img src={c.illustration} alt="" />
                </div>
                <p className="case-card-problem">{c.problem}</p>
                <div className="case-card-arrow" aria-hidden="true">
                  <svg width="22" height="40" viewBox="0 0 22 40" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M11 4 q-1 12 0 24" />
                    <path d="M5 24 q4 4 6 8 q2 -4 6 -8" />
                  </svg>
                  <span>改善</span>
                </div>
                <p className="case-card-result">{c.result}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* よくあるご質問 */}
      <section className="section" style={{ padding: "80px 0" }}>
        <div className="container-narrow fade-up">
          <h2 className="section-title" style={{ fontSize: 28, textAlign: "center", marginBottom: 32 }}>
            <span className="marker">よくある</span>ご質問
          </h2>
          {[
            { q: "どこから始めるのが良いですか？", a: "規模に関わらず、まずは無料相談で御社の状況を伺います。①小さな業務改善から始めるパターンも、③業務構造診断パックから入るパターンも自然です。状況に合わせて、無理のない始め方をご案内します。" },
            { q: "①小さな業務改善と④継続改善サポートは何が違うのですか？", a: "①は「この業務を直してほしい」という1件単位の依頼です。④は、毎月の改善の優先順位を、外部の立場から見続ける顧問契約です。" },
            { q: "ツールやシステムの提案も可能ですか？", a: "必要に応じて、ツールの選定から設定・開発まで対応します。ただし「ツールありき」では進めません。業務の流れ自体を整理したうえで、必要な仕組みだけを整えるのが基本姿勢です。AI を含めたツール導入も同じスタンスで取り入れます。" },
            { q: "対応エリアはどこまでですか？", a: "無料相談やオンラインで進められるサービスは全国対応可能です。業務構造診断パックなど現場確認を含むものは、広島県内（広島・東広島・呉）を中心に現場訪問で対応しています。県外の場合は要相談（出張可・交通費別）です。" },
            { q: "事例パートナー特典について教えてください。", a: "ご契約後の最初の「小さな業務改善」1件を半額でご提供する特典です。先着3社限定で、改善前と改善後の状態を、事例として公開させていただける企業様が対象です（社名公開を歓迎。ご希望により業種のみの公開でも可）。" },
          ].map((f, i) => (
            <details key={i} className="card" style={{ marginBottom: 12, padding: 0 }}>
              <summary style={{ padding: "18px 24px", cursor: "pointer", fontWeight: 700, color: "var(--navy-900)", fontSize: 16, listStyle: "none", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span><span style={{ color: "var(--yellow-500)", marginRight: 10, fontFamily: "var(--font-hand)" }}>Q.</span>{f.q}</span>
                <span style={{ color: "var(--navy-700)" }}>＋</span>
              </summary>
              <div style={{ padding: "0 24px 20px", color: "var(--ink-700)", fontSize: 15, lineHeight: 1.9 }}>
                <span style={{ color: "var(--navy-700)", marginRight: 10, fontFamily: "var(--font-hand)" }}>A.</span>{f.a}
              </div>
            </details>
          ))}
        </div>
      </section>

      <CTARibbon />
      <SiteFooter />
    </div>
  );
}

window.ServicePage = ServicePage;
