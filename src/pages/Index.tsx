import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const products = [
    {
      id: 1,
      name: "Товар 1",
      price: "1000 ₽",
      oldPrice: "1500 ₽",
      image: "https://cdn.poehali.dev/projects/9f90d186-7552-4034-9da9-a9109c328a12/files/2fbe94c8-107a-49f7-b61e-e49a22fa9c7a.jpg",
      badge: "Хит продаж"
    },
    {
      id: 2,
      name: "Товар 2",
      price: "1500 ₽",
      image: "https://cdn.poehali.dev/projects/9f90d186-7552-4034-9da9-a9109c328a12/files/493604eb-576b-4b90-bc56-f71acca5cf71.jpg",
      badge: "Новинка"
    },
    {
      id: 3,
      name: "Товар 3",
      price: "1200 ₽",
      image: "https://cdn.poehali.dev/projects/9f90d186-7552-4034-9da9-a9109c328a12/files/1ea72516-74ed-4da1-a761-7ba01f9e867b.jpg",
      badge: "Акция"
    },
    {
      id: 4,
      name: "Товар 4",
      price: "2000 ₽",
      image: "https://cdn.poehali.dev/projects/9f90d186-7552-4034-9da9-a9109c328a12/files/2fbe94c8-107a-49f7-b61e-e49a22fa9c7a.jpg"
    },
    {
      id: 5,
      name: "Товар 5",
      price: "1800 ₽",
      image: "https://cdn.poehali.dev/projects/9f90d186-7552-4034-9da9-a9109c328a12/files/493604eb-576b-4b90-bc56-f71acca5cf71.jpg"
    },
    {
      id: 6,
      name: "Товар 6",
      price: "1300 ₽",
      image: "https://cdn.poehali.dev/projects/9f90d186-7552-4034-9da9-a9109c328a12/files/1ea72516-74ed-4da1-a761-7ba01f9e867b.jpg"
    }
  ];

  const features = [
    {
      icon: "Truck",
      title: "Быстрая доставка",
      description: "Доставим ваш заказ за 1-3 дня"
    },
    {
      icon: "Shield",
      title: "Гарантия качества",
      description: "100% оригинальная продукция"
    },
    {
      icon: "CreditCard",
      title: "Удобная оплата",
      description: "Оплата при получении"
    },
    {
      icon: "HeadphonesIcon",
      title: "Поддержка 24/7",
      description: "Всегда на связи для вас"
    }
  ];

  const categories = [
    { name: "Категория 1", icon: "Package", color: "bg-blue-500" },
    { name: "Категория 2", icon: "Star", color: "bg-purple-500" },
    { name: "Категория 3", icon: "Gift", color: "bg-pink-500" },
    { name: "Категория 4", icon: "Zap", color: "bg-orange-500" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-lg border-b border-border shadow-sm">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-purple-600 rounded-xl flex items-center justify-center">
                <Icon name="Store" className="text-white" size={24} />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                Магазин
              </h1>
            </div>
            <div className="hidden md:flex gap-6 items-center">
              <a href="#catalog" className="text-foreground hover:text-primary transition-colors font-medium">Каталог</a>
              <a href="#features" className="text-foreground hover:text-primary transition-colors font-medium">О нас</a>
              <a href="#contacts" className="text-foreground hover:text-primary transition-colors font-medium">Контакты</a>
              <Button size="sm">
                <Icon name="ShoppingCart" className="mr-2" size={16} />
                Корзина
              </Button>
            </div>
          </div>
        </nav>
      </header>

      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-purple-500/10 to-pink-500/10 animate-pulse" />
        <div className="container mx-auto text-center max-w-5xl relative z-10">
          <Badge variant="outline" className="mb-6 text-lg px-4 py-2 border-primary text-primary">
            <Icon name="Sparkles" className="mr-2" size={16} />
            Специальное предложение
          </Badge>
          <h2 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Лучшие товары для вас
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto">
            Огромный выбор качественной продукции по выгодным ценам. Скидки до 50%!
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="text-lg px-8 bg-gradient-to-r from-primary to-purple-600 hover:opacity-90">
              <Icon name="ShoppingBag" className="mr-2" size={20} />
              Смотреть каталог
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8">
              <Icon name="Phone" className="mr-2" size={20} />
              Связаться с нами
            </Button>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-white/50 backdrop-blur">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {categories.map((category, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all cursor-pointer border-2 hover:border-primary">
                <CardContent className="pt-6">
                  <div className={`w-16 h-16 ${category.color} rounded-2xl mx-auto mb-3 flex items-center justify-center transform hover:scale-110 transition-transform`}>
                    <Icon name={category.icon as any} className="text-white" size={32} />
                  </div>
                  <p className="font-semibold text-foreground">{category.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="catalog" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              Популярные товары
            </h3>
            <p className="text-xl text-muted-foreground">Выбирайте из нашего ассортимента</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {products.map((product, index) => (
              <Card key={product.id} className="overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary group">
                <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                  {product.badge && (
                    <Badge className="absolute top-4 right-4 z-10 bg-gradient-to-r from-orange-500 to-red-500 text-white border-0">
                      {product.badge}
                    </Badge>
                  )}
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl">{product.name}</CardTitle>
                  <CardDescription>Качественный товар по выгодной цене</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-3xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                        {product.price}
                      </span>
                      {product.oldPrice && (
                        <span className="ml-2 text-lg text-muted-foreground line-through">{product.oldPrice}</span>
                      )}
                    </div>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-primary to-purple-600 hover:opacity-90">
                    <Icon name="ShoppingCart" className="mr-2" size={18} />
                    В корзину
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="features" className="py-20 px-4 bg-gradient-to-r from-primary/5 via-purple-500/5 to-pink-500/5">
        <div className="container mx-auto max-w-6xl">
          <h3 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
            Почему выбирают нас
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center border-2 hover:border-primary transition-all hover:shadow-xl">
                <CardHeader>
                  <div className="mx-auto mb-4 w-20 h-20 bg-gradient-to-br from-primary to-purple-600 rounded-2xl flex items-center justify-center transform hover:scale-110 transition-transform">
                    <Icon name={feature.icon as any} className="text-white" size={36} />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-r from-primary to-purple-600 text-white">
        <div className="container mx-auto text-center max-w-4xl">
          <h3 className="text-5xl font-bold mb-6">Подпишитесь на новости</h3>
          <p className="text-xl mb-8 opacity-90">Получайте информацию о новых товарах и специальных предложениях</p>
          <div className="flex gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Ваш email" 
              className="flex-1 px-6 py-3 rounded-lg text-foreground"
            />
            <Button size="lg" variant="secondary" className="px-8">
              <Icon name="Send" className="mr-2" size={20} />
              Подписаться
            </Button>
          </div>
        </div>
      </section>

      <footer id="contacts" className="bg-slate-900 text-slate-300 py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-purple-600 rounded-lg flex items-center justify-center">
                  <Icon name="Store" className="text-white" size={20} />
                </div>
                <h4 className="text-white font-bold text-lg">Магазин</h4>
              </div>
              <p className="text-sm">Лучшие товары для вас</p>
            </div>
            <div>
              <h5 className="text-white font-semibold mb-4">Каталог</h5>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Все товары</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Новинки</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Акции</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-white font-semibold mb-4">Информация</h5>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Доставка</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Оплата</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-white font-semibold mb-4">Контакты</h5>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (999) 123-45-67
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@shop.ru
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-700 pt-8 text-center text-sm">
            <p>© 2024 Магазин. Все права защищены</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
