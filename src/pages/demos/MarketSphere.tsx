import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ShoppingCart, Heart, Star, SlidersHorizontal, ChevronDown, TrendingUp, Package, Users, DollarSign, BarChart2, Bell, Settings, Home, Tag, X, Check, ArrowRight, Zap, Shield, Truck } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { AnnaNavbar } from "@/components/AnnaNavbar";
import { AnnaFooter } from "@/components/AnnaFooter";

type View = "storefront" | "dashboard";

const ACCENT = "hsl(168, 76%, 36%)";
const ACCENT_LIGHT = "hsl(168, 60%, 94%)";

function StarRating({ rating, count }: { rating: number; count?: number }) {
  return (
    <div className="flex items-center gap-1.5">
      <div className="flex">
        {[1, 2, 3, 4, 5].map((s) => (
          <Star
            key={s}
            size={12}
            fill={s <= Math.round(rating) ? ACCENT : "none"}
            stroke={s <= Math.round(rating) ? ACCENT : "hsl(168,20%,70%)"}
          />
        ))}
      </div>
      {count !== undefined && (
        <span className="text-xs text-[hsl(210,10%,55%)]">{count.toLocaleString()}</span>
      )}
    </div>
  );
}

export default function MarketSphere() {
  const { t } = useLang();
  const ms = (t as any).demos?.marketSphere ?? (t as any).marketSphere;
  const [view, setView] = useState<View>("storefront");
  const [activeCategory, setActiveCategory] = useState(ms.categories[0]);
  const [wishlist, setWishlist] = useState<number[]>([]);
  const [cartCount, setCartCount] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilters, setActiveFilters] = useState<string[]>(["Electronics"]);

  const toggleWishlist = (id: number) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const addToCart = () => setCartCount((c) => c + 1);

  const filteredProducts = ms.products.filter((p: any) =>
    searchQuery === "" || p.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[hsl(210,20%,98%)] text-[hsl(210,20%,15%)]">
      <AnnaNavbar />

      {/* Header */}
      <header className="sticky top-16 z-40 bg-white border-b border-[hsl(210,15%,90%)] shadow-sm">
        <div className="max-w-screen-xl mx-auto px-6 h-14 flex items-center gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2 min-w-[120px]">
            <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: ACCENT }}>
              <Package size={14} className="text-white" />
            </div>
            <span className="font-black text-base tracking-tight">Market<span style={{ color: ACCENT }}>Sphere</span></span>
          </div>

          {/* Search */}
          <div className="flex-1 max-w-lg relative">
            <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-[hsl(210,10%,55%)]" />
            <input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={ms.searchPlaceholder}
              className="w-full pl-9 pr-4 py-2 text-sm bg-[hsl(210,15%,96%)] border border-[hsl(210,15%,88%)] rounded-xl focus:outline-none focus:ring-2 focus:border-transparent transition"
              style={{ "--tw-ring-color": ACCENT } as any}
            />
          </div>

          {/* Nav Actions */}
          <div className="flex items-center gap-2 ml-auto">
            <button
              onClick={() => setView(view === "storefront" ? "dashboard" : "storefront")}
              className="hidden sm:flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg border border-[hsl(210,15%,85%)] hover:bg-[hsl(210,15%,96%)] transition"
            >
              <BarChart2 size={13} />
              {view === "storefront" ? ms.sellerDashboard : ms.backToStore}
            </button>
            <button className="relative p-2 hover:bg-[hsl(210,15%,96%)] rounded-lg transition">
              <Heart size={18} className="text-[hsl(210,10%,50%)]" />
              {wishlist.length > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 text-[10px] font-bold text-white rounded-full flex items-center justify-center" style={{ background: ACCENT }}>
                  {wishlist.length}
                </span>
              )}
            </button>
            <button className="relative flex items-center gap-1.5 text-sm font-semibold px-3 py-1.5 text-white rounded-xl transition hover:opacity-90" style={{ background: ACCENT }}>
              <ShoppingCart size={15} />
              <span>{cartCount}</span>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence mode="wait">
        {view === "storefront" ? (
          <motion.div
            key="storefront"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Hero Banner */}
            <section className="relative overflow-hidden py-14" style={{ background: `linear-gradient(135deg, hsl(168,76%,12%) 0%, hsl(168,60%,22%) 50%, hsl(200,80%,18%) 100%)` }}>
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl" style={{ background: ACCENT }} />
                <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full blur-3xl bg-[hsl(200,80%,60%)]" />
              </div>
              <div className="relative max-w-screen-xl mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="flex-1 text-white">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full mb-4" style={{ background: "rgba(255,255,255,0.15)", backdropFilter: "blur(8px)" }}>
                      <Zap size={11} /> {ms.heroBadge}
                    </span>
                    <h1 className="text-4xl md:text-5xl font-black leading-tight mb-4">{ms.heroTitle}</h1>
                    <p className="text-white/70 text-base mb-6 max-w-md">{ms.heroSubtitle}</p>
                    <div className="flex gap-3">
                      <button className="text-sm font-bold px-5 py-2.5 rounded-xl bg-white text-[hsl(168,76%,30%)] hover:bg-white/90 transition">{ms.heroBtn}</button>
                      <button className="text-sm font-semibold px-5 py-2.5 rounded-xl border border-white/30 text-white hover:bg-white/10 transition">{ms.heroLearn}</button>
                    </div>
                    <div className="flex gap-6 mt-6">
                      {ms.heroStats.map((s: any) => (
                        <div key={s.label}>
                          <p className="text-xl font-black">{s.value}</p>
                          <p className="text-xs text-white/55">{s.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Trust Badges */}
                  <div className="flex-shrink-0 grid grid-cols-2 gap-3">
                    {[
                      { icon: Shield, label: ms.trustBadges[0] },
                      { icon: Truck, label: ms.trustBadges[1] },
                      { icon: Zap, label: ms.trustBadges[2] },
                      { icon: Users, label: ms.trustBadges[3] },
                    ].map(({ icon: Icon, label }) => (
                      <div key={label} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-3 py-2.5 text-white">
                        <Icon size={14} className="flex-shrink-0 opacity-80" />
                        <span className="text-xs font-medium">{label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Category Tabs */}
            <section className="bg-white border-b border-[hsl(210,15%,90%)]">
              <div className="max-w-screen-xl mx-auto px-6">
                <div className="flex gap-1 overflow-x-auto py-3 scrollbar-hide">
                  {ms.categories.map((cat: string) => (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`flex-shrink-0 text-sm font-semibold px-4 py-2 rounded-lg transition ${activeCategory === cat ? "text-white" : "text-[hsl(210,10%,45%)] hover:bg-[hsl(210,15%,96%)]"}`}
                      style={activeCategory === cat ? { background: ACCENT } : {}}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
            </section>

            {/* Main Content: Sidebar + Products */}
            <div className="max-w-screen-xl mx-auto px-6 py-8 flex gap-6">
              {/* Sidebar Filters */}
              <aside className="w-56 flex-shrink-0 hidden lg:block">
                <div className="bg-white rounded-2xl border border-[hsl(210,15%,90%)] p-5 space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sm flex items-center gap-2"><SlidersHorizontal size={14} /> {ms.filters}</span>
                    <button className="text-xs font-semibold hover:opacity-70 transition" style={{ color: ACCENT }}>{ms.clearAll}</button>
                  </div>

                  {/* Category Filter */}
                  <div>
                    <p className="text-xs font-bold text-[hsl(210,10%,45%)] uppercase tracking-wider mb-3">{ms.categoryLabel}</p>
                    <div className="space-y-1.5">
                      {ms.filterCategories.map((f: string) => (
                        <label key={f} className="flex items-center gap-2 cursor-pointer group">
                          <button
                            onClick={() => setActiveFilters(prev => prev.includes(f) ? prev.filter(x => x !== f) : [...prev, f])}
                            className="w-4 h-4 rounded flex items-center justify-center border transition flex-shrink-0"
                            style={activeFilters.includes(f) ? { background: ACCENT, borderColor: ACCENT } : { borderColor: "hsl(210,15%,80%)" }}
                          >
                            {activeFilters.includes(f) && <Check size={10} className="text-white" />}
                          </button>
                          <span className="text-sm text-[hsl(210,10%,35%)]">{f}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Price Range */}
                  <div>
                    <p className="text-xs font-bold text-[hsl(210,10%,45%)] uppercase tracking-wider mb-3">{ms.priceRange}</p>
                    <div className="space-y-2">
                      <input type="range" min="0" max="1000" defaultValue="500" className="w-full accent-[hsl(168,76%,36%)]" />
                      <div className="flex justify-between text-xs text-[hsl(210,10%,50%)]">
                        <span>$0</span>
                        <span>$1,000</span>
                      </div>
                    </div>
                  </div>

                  {/* Star Rating */}
                  <div>
                    <p className="text-xs font-bold text-[hsl(210,10%,45%)] uppercase tracking-wider mb-3">{ms.starRating}</p>
                    <div className="space-y-1.5">
                      {[5, 4, 3].map((r) => (
                        <button key={r} className="flex items-center gap-2 w-full hover:opacity-80 transition">
                          <StarRating rating={r} />
                          <span className="text-xs text-[hsl(210,10%,50%)]">& {ms.up}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Shipping */}
                  <div>
                    <p className="text-xs font-bold text-[hsl(210,10%,45%)] uppercase tracking-wider mb-3">{ms.shipping}</p>
                    <div className="flex gap-2">
                      <button className="text-xs font-semibold px-3 py-1.5 rounded-lg text-white transition" style={{ background: ACCENT }}>{ms.standard}</button>
                      <button className="text-xs font-semibold px-3 py-1.5 rounded-lg border border-[hsl(210,15%,85%)] text-[hsl(210,10%,40%)] hover:bg-[hsl(210,15%,96%)] transition">{ms.express}</button>
                    </div>
                  </div>
                </div>
              </aside>

              {/* Product Grid */}
              <div className="flex-1">
                <div className="flex items-center justify-between mb-5">
                  <p className="text-sm text-[hsl(210,10%,45%)]">
                    {ms.showing} <strong className="text-[hsl(210,20%,15%)]">{filteredProducts.length}</strong> {ms.products2}
                    {activeCategory !== ms.categories[0] && <span> {ms.in} <strong style={{ color: ACCENT }}>{activeCategory}</strong></span>}
                  </p>
                  <button className="flex items-center gap-1.5 text-sm font-medium text-[hsl(210,10%,40%)] border border-[hsl(210,15%,85%)] px-3 py-1.5 rounded-lg hover:bg-[hsl(210,15%,96%)] transition">
                    {ms.sortBy} <ChevronDown size={13} />
                  </button>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {filteredProducts.map((product: any, i: number) => (
                    <motion.div
                      key={product.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.05, duration: 0.3 }}
                      className="bg-white rounded-2xl border border-[hsl(210,15%,90%)] overflow-hidden group hover:shadow-lg hover:border-[hsl(168,40%,80%)] transition-all duration-300"
                    >
                      <div className="relative aspect-square overflow-hidden bg-[hsl(210,15%,97%)]">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        {product.badge && (
                          <span className="absolute top-3 left-3 text-[10px] font-black px-2 py-0.5 rounded-full text-white" style={{ background: ACCENT }}>
                            {product.badge}
                          </span>
                        )}
                        {product.discount && (
                          <span className="absolute top-3 left-3 text-[10px] font-black px-2 py-0.5 rounded-full text-white bg-[hsl(0,80%,50%)]">
                            -{product.discount}%
                          </span>
                        )}
                        <button
                          onClick={() => toggleWishlist(product.id)}
                          className="absolute top-3 right-3 w-7 h-7 rounded-full bg-white shadow-sm flex items-center justify-center transition hover:scale-110"
                        >
                          <Heart
                            size={13}
                            fill={wishlist.includes(product.id) ? "hsl(0,80%,55%)" : "none"}
                            stroke={wishlist.includes(product.id) ? "hsl(0,80%,55%)" : "hsl(210,10%,60%)"}
                          />
                        </button>
                      </div>
                      <div className="p-4">
                        <p className="text-[10px] font-semibold text-[hsl(210,10%,55%)] mb-1">{product.category}</p>
                        <h3 className="text-sm font-bold leading-snug mb-2 line-clamp-2">{product.name}</h3>
                        <StarRating rating={product.rating} count={product.reviews} />
                        <div className="flex items-center justify-between mt-3">
                          <div>
                            <span className="font-black text-base">${product.price}</span>
                            {product.originalPrice && (
                              <span className="text-xs text-[hsl(210,10%,60%)] line-through ml-1.5">${product.originalPrice}</span>
                            )}
                          </div>
                          <button
                            onClick={addToCart}
                            className="flex items-center gap-1 text-xs font-bold px-3 py-1.5 rounded-lg text-white transition hover:opacity-85"
                            style={{ background: ACCENT }}
                          >
                            <ShoppingCart size={11} /> {ms.addToCart}
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Load More */}
                <div className="mt-8 flex justify-center">
                  <button className="flex items-center gap-2 text-sm font-semibold px-6 py-2.5 rounded-xl border-2 transition hover:text-white" style={{ borderColor: ACCENT, color: ACCENT } as any}
                    onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = ACCENT; (e.currentTarget as HTMLButtonElement).style.color = "white"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = "transparent"; (e.currentTarget as HTMLButtonElement).style.color = ACCENT; }}
                  >
                    {ms.loadMore} <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>

            {/* Seller Spotlight */}
            <section className="py-12 bg-white border-t border-[hsl(210,15%,90%)]">
              <div className="max-w-screen-xl mx-auto px-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-black">{ms.topSellers}</h2>
                  <button className="text-sm font-semibold flex items-center gap-1 hover:opacity-70 transition" style={{ color: ACCENT }}>{ms.viewAll} <ArrowRight size={13} /></button>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {ms.sellers.map((seller: any) => (
                    <motion.div
                      key={seller.name}
                      whileHover={{ y: -4 }}
                      className="bg-[hsl(210,15%,98%)] rounded-2xl border border-[hsl(210,15%,90%)] p-5 text-center cursor-pointer group"
                    >
                      <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-3 font-black text-white shadow-sm" style={{ background: `linear-gradient(135deg, ${ACCENT}, hsl(200,80%,40%))` }}>
                        {seller.avatar}
                      </div>
                      <p className="font-bold text-sm mb-0.5">{seller.name}</p>
                      <p className="text-xs text-[hsl(210,10%,55%)] mb-2">{seller.products} {ms.productsLabel}</p>
                      <StarRating rating={seller.rating} />
                      <p className="text-[10px] font-semibold mt-2" style={{ color: ACCENT }}>{seller.sales} {ms.salesLabel}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>
          </motion.div>
        ) : (
          /* SELLER DASHBOARD */
          <motion.div
            key="dashboard"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="max-w-screen-xl mx-auto px-6 py-8"
          >
            <div className="flex gap-6">
              {/* Sidebar */}
              <aside className="w-52 flex-shrink-0 hidden lg:block">
                <div className="bg-white rounded-2xl border border-[hsl(210,15%,90%)] p-4 space-y-1">
                  {[
                    { icon: Home, label: ms.dash.overview },
                    { icon: Package, label: ms.dash.products },
                    { icon: ShoppingCart, label: ms.dash.orders },
                    { icon: Users, label: ms.dash.customers },
                    { icon: BarChart2, label: ms.dash.analytics },
                    { icon: Tag, label: ms.dash.promotions },
                    { icon: Bell, label: ms.dash.notifications },
                    { icon: Settings, label: ms.dash.settings },
                  ].map(({ icon: Icon, label }, i) => (
                    <button
                      key={label}
                      className={`flex items-center gap-2.5 w-full text-left text-sm px-3 py-2.5 rounded-xl font-medium transition ${i === 0 ? "text-white" : "text-[hsl(210,10%,40%)] hover:bg-[hsl(210,15%,96%)]"}`}
                      style={i === 0 ? { background: ACCENT } : {}}
                    >
                      <Icon size={15} /> {label}
                    </button>
                  ))}
                </div>
              </aside>

              {/* Dashboard Content */}
              <div className="flex-1 space-y-6">
                <div>
                  <h2 className="text-2xl font-black mb-1">{ms.dash.welcomeTitle}</h2>
                  <p className="text-sm text-[hsl(210,10%,50%)]">{ms.dash.welcomeSubtitle}</p>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {ms.dash.stats.map((stat: any) => {
                    const Icon = { revenue: DollarSign, orders: ShoppingCart, customers: Users, rating: Star }[stat.key as string] || TrendingUp;
                    return (
                      <div key={stat.label} className="bg-white rounded-2xl border border-[hsl(210,15%,90%)] p-5">
                        <div className="flex items-center justify-between mb-3">
                          <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: ACCENT_LIGHT }}>
                            <Icon size={16} style={{ color: ACCENT }} />
                          </div>
                          <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${stat.trend > 0 ? "bg-[hsl(168,60%,94%)] text-[hsl(168,76%,30%)]" : "bg-[hsl(0,60%,94%)] text-[hsl(0,70%,50%)]"}`}>
                            {stat.trend > 0 ? "+" : ""}{stat.trend}%
                          </span>
                        </div>
                        <p className="text-2xl font-black mb-0.5">{stat.value}</p>
                        <p className="text-xs text-[hsl(210,10%,55%)]">{stat.label}</p>
                      </div>
                    );
                  })}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Recent Orders */}
                  <div className="md:col-span-2 bg-white rounded-2xl border border-[hsl(210,15%,90%)] p-5">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-black text-sm">{ms.dash.recentOrders}</h3>
                      <button className="text-xs font-semibold hover:opacity-70" style={{ color: ACCENT }}>{ms.viewAll}</button>
                    </div>
                    <div className="space-y-3">
                      {ms.dash.orders_list.map((order: any) => (
                        <div key={order.id} className="flex items-center gap-3 p-3 rounded-xl bg-[hsl(210,15%,98%)] border border-[hsl(210,15%,92%)]">
                          <div className="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs text-white" style={{ background: ACCENT }}>
                            #{order.id}
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-xs font-semibold truncate">{order.product}</p>
                            <p className="text-[10px] text-[hsl(210,10%,55%)]">{order.customer}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-xs font-black">${order.amount}</p>
                            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${order.status === "Delivered" ? "bg-[hsl(168,60%,92%)] text-[hsl(168,70%,30%)]" : order.status === "Pending" ? "bg-[hsl(40,90%,92%)] text-[hsl(40,80%,35%)]" : "bg-[hsl(210,50%,92%)] text-[hsl(210,70%,40%)]"}`}>
                              {order.status}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Top Products */}
                  <div className="bg-white rounded-2xl border border-[hsl(210,15%,90%)] p-5">
                    <h3 className="font-black text-sm mb-4">{ms.dash.topProducts}</h3>
                    <div className="space-y-3">
                      {ms.dash.top_products.map((p: any, i: number) => (
                        <div key={p.name} className="flex items-center gap-3">
                          <span className="text-xs font-black w-5 text-[hsl(210,10%,55%)]">#{i + 1}</span>
                          <div className="w-8 h-8 rounded-lg overflow-hidden flex-shrink-0">
                            <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-xs font-semibold truncate">{p.name}</p>
                            <div className="h-1.5 bg-[hsl(210,15%,92%)] rounded-full mt-1 overflow-hidden">
                              <div className="h-full rounded-full" style={{ width: `${p.percent}%`, background: ACCENT }} />
                            </div>
                          </div>
                          <span className="text-xs font-black text-right">${p.revenue}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnnaFooter />
    </div>
  );
}
