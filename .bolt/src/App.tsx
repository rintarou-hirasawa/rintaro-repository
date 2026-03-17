import { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

function App() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* ヘッダー */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
        <nav className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <div className="text-xl font-light tracking-wider">GLOBAL TIMBER</div>
          <div className="flex gap-10 text-sm font-light">
            <a href="#concept" className="hover:opacity-60 transition-opacity">事業内容</a>
            <a href="#features" className="hover:opacity-60 transition-opacity">特徴</a>
            <a href="#contact" className="hover:opacity-60 transition-opacity">お問い合わせ</a>
          </div>
        </nav>
      </header>

      {/* メインビジュアル */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100"></div>
        <div className="relative z-10 text-center px-6">
          <h1 className="text-5xl md:text-7xl font-light tracking-wide mb-8 fade-in">
            開発型貿易事業
          </h1>
          <p className="text-lg md:text-xl font-light text-gray-600 tracking-wider fade-in" style={{ transitionDelay: '0.2s' }}>
            南洋材合板・海外進出支援
          </p>
        </div>
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-gray-400" />
        </div>
      </section>

      {/* コンセプト */}
      <section id="concept" className="py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light text-center mb-24 tracking-wide fade-in">
            事業内容
          </h2>

          <div className="space-y-20">
            <div className="fade-in">
              <h3 className="text-2xl font-light mb-6 tracking-wide">輸入販売事業</h3>
              <p className="text-gray-600 leading-relaxed font-light text-lg">
                南洋材合板、LVL、単板、製材品等の輸入販売を行っております。長年培った現地ネットワークを活かし、高品質な木材製品を安定供給いたします。
              </p>
            </div>

            <div className="fade-in">
              <h3 className="text-2xl font-light mb-6 tracking-wide">海外進出支援</h3>
              <p className="text-gray-600 leading-relaxed font-light text-lg mb-8">
                製造拠点移転、海外市場開拓、直輸入化サポート等、企業様の海外展開を総合的に支援いたします。現地の商習慣や法規制に精通したスタッフが、きめ細かくサポートいたします。
              </p>

              {/* 動画1 */}
              <div className="aspect-video w-full rounded-lg overflow-hidden shadow-lg mb-8 video-placeholder fade-in">
                現地工場の動画 1
              </div>
            </div>

            <div className="fade-in">
              <h3 className="text-2xl font-light mb-6 tracking-wide">開発型事業</h3>
              <p className="text-gray-600 leading-relaxed font-light text-lg mb-8">
                当社の特徴は、単なる商社機能にとどまらない開発型事業です。商品開発から生産拠点開発まで、お客様のニーズに合わせた最適なソリューションを提供いたします。
              </p>

              {/* 動画2 */}
              <div className="aspect-video w-full rounded-lg overflow-hidden shadow-lg mb-8 video-placeholder fade-in">
                現地工場の動画 2
              </div>
            </div>

            {/* 画像 */}
            <div className="fade-in">
              <div className="aspect-[21/9] w-full rounded-lg overflow-hidden shadow-lg image-placeholder">
                現地の画像
              </div>
            </div>

            {/* 動画3 */}
            <div className="fade-in">
              <div className="aspect-video w-full rounded-lg overflow-hidden shadow-lg video-placeholder">
                現地工場の動画 3
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 特徴 */}
      <section id="features" className="py-32 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light text-center mb-24 tracking-wide fade-in">
            私たちの強み
          </h2>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="bg-white p-12 rounded-lg shadow-sm hover:shadow-md transition-shadow fade-in">
              <div className="text-6xl font-light text-gray-300 mb-6">01</div>
              <h3 className="text-2xl font-light mb-6 tracking-wide">商品開発力</h3>
              <p className="text-gray-600 leading-relaxed font-light">
                市場のニーズを的確に捉え、お客様と共に最適な商品を開発いたします。
              </p>
            </div>

            <div className="bg-white p-12 rounded-lg shadow-sm hover:shadow-md transition-shadow fade-in" style={{ transitionDelay: '0.1s' }}>
              <div className="text-6xl font-light text-gray-300 mb-6">02</div>
              <h3 className="text-2xl font-light mb-6 tracking-wide">生産拠点開発</h3>
              <p className="text-gray-600 leading-relaxed font-light">
                現地での生産拠点開拓から運営まで、トータルでサポートいたします。
              </p>
            </div>

            <div className="bg-white p-12 rounded-lg shadow-sm hover:shadow-md transition-shadow fade-in" style={{ transitionDelay: '0.2s' }}>
              <div className="text-6xl font-light text-gray-300 mb-6">03</div>
              <h3 className="text-2xl font-light mb-6 tracking-wide">現地ネットワーク</h3>
              <p className="text-gray-600 leading-relaxed font-light">
                長年培った信頼関係により、安定した供給体制を実現しております。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* お問い合わせ */}
      <section id="contact" className="py-32 px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light text-center mb-24 tracking-wide fade-in">
            お問い合わせ
          </h2>

          <form className="space-y-8 fade-in">
            <div>
              <label className="block text-sm font-light tracking-wider mb-3 text-gray-700">
                貴社名
              </label>
              <input
                type="text"
                className="w-full px-6 py-4 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400 transition-colors font-light"
              />
            </div>

            <div>
              <label className="block text-sm font-light tracking-wider mb-3 text-gray-700">
                お名前
              </label>
              <input
                type="text"
                className="w-full px-6 py-4 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400 transition-colors font-light"
              />
            </div>

            <div>
              <label className="block text-sm font-light tracking-wider mb-3 text-gray-700">
                メールアドレス
              </label>
              <input
                type="email"
                className="w-full px-6 py-4 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400 transition-colors font-light"
              />
            </div>

            <div>
              <label className="block text-sm font-light tracking-wider mb-3 text-gray-700">
                お問い合わせ内容
              </label>
              <textarea
                rows={6}
                className="w-full px-6 py-4 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400 transition-colors font-light resize-none"
              ></textarea>
            </div>

            <div className="text-center pt-6">
              <button
                type="submit"
                className="px-16 py-4 bg-gray-900 text-white font-light tracking-wider rounded-lg hover:bg-gray-800 transition-colors"
              >
                送信する
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* フッター */}
      <footer className="py-12 px-6 border-t border-gray-100">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm font-light text-gray-500 tracking-wider">
            © 2024 GLOBAL TIMBER. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
