import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";

const Index = () => {
  const products = [
    {
      id: 1,
      name: "Берёзовый веник",
      price: "350 ₽",
      image: "https://cdn.poehali.dev/projects/9f90d186-7552-4034-9da9-a9109c328a12/files/2fbe94c8-107a-49f7-b61e-e49a22fa9c7a.jpg",
      description: "Классический берёзовый веник для русской бани"
    },
    {
      id: 2,
      name: "Эвкалиптовый веник",
      price: "450 ₽",
      image: "https://cdn.poehali.dev/projects/9f90d186-7552-4034-9da9-a9109c328a12/files/493604eb-576b-4b90-bc56-f71acca5cf71.jpg",
      description: "Ароматный эвкалипт с целебными свойствами"
    },
    {
      id: 3,
      name: "Дубовый веник",
      price: "400 ₽",
      image: "https://cdn.poehali.dev/projects/9f90d186-7552-4034-9da9-a9109c328a12/files/1ea72516-74ed-4da1-a761-7ba01f9e867b.jpg",
      description: "Плотный дубовый веник для крепкого пара"
    }
  ];

  const reviews = [
    { name: "Иван С.", text: "Отличные веники! Листья не осыпаются, аромат потрясающий.", rating: 5 },
    { name: "Мария П.", text: "Заказываю уже второй раз. Качество на высоте!", rating: 5 },
    { name: "Алексей К.", text: "Быстрая доставка, веники свежие. Рекомендую!", rating: 5 }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-border">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Leaf" className="text-primary" size={32} />
              <h1 className="text-2xl font-bold text-foreground">БаняВеник</h1>
            </div>
            <div className="hidden md:flex gap-6">
              <a href="#catalog" className="text-foreground hover:text-primary transition-colors">Каталог</a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors">О вениках</a>
              <a href="#reviews" className="text-foreground hover:text-primary transition-colors">Отзывы</a>
              <a href="#delivery" className="text-foreground hover:text-primary transition-colors">Доставка</a>
              <a href="#contacts" className="text-foreground hover:text-primary transition-colors">Контакты</a>
            </div>
          </div>
        </nav>
      </header>

      <section className="py-24 px-4 bg-gradient-to-b from-background to-muted">
        <div className="container mx-auto text-center max-w-4xl animate-fade-in">
          <Badge variant="outline" className="mb-4 text-primary border-primary">100% натуральные веники</Badge>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
            Качественные веники<br />для настоящей бани
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Отборное сырьё, правильная заготовка, доставка по всей России
          </p>
          <Button size="lg" className="text-lg px-8" onClick={() => document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' })}>
            <Icon name="ShoppingBag" className="mr-2" size={20} />
            Смотреть каталог
          </Button>
        </div>
      </section>

      <section id="catalog" className="py-20 px-4">
        <div className="container mx-auto">
          <h3 className="text-4xl font-bold text-center mb-12 text-foreground">Наши веники</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {products.map((product, index) => (
              <Card key={product.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 animate-scale-in border-border" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="aspect-square overflow-hidden bg-white">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl">{product.name}</CardTitle>
                  <CardDescription>{product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-primary">{product.price}</span>
                    <Button>Заказать</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-muted">
        <div className="container mx-auto max-w-4xl">
          <h3 className="text-4xl font-bold text-center mb-12 text-foreground">О наших вениках</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-border">
              <CardHeader>
                <div className="mx-auto mb-4 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="Leaf" className="text-primary" size={32} />
                </div>
                <CardTitle>Экологично</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Заготовка в чистых районах, без химии и обработки</p>
              </CardContent>
            </Card>
            <Card className="text-center border-border">
              <CardHeader>
                <div className="mx-auto mb-4 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="Award" className="text-primary" size={32} />
                </div>
                <CardTitle>Качество</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Отбираем только лучшие ветки, контролируем каждый этап</p>
              </CardContent>
            </Card>
            <Card className="text-center border-border">
              <CardHeader>
                <div className="mx-auto mb-4 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="Sparkles" className="text-primary" size={32} />
                </div>
                <CardTitle>Свежесть</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Быстрая доставка, правильное хранение, максимум аромата</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h3 className="text-4xl font-bold text-center mb-12 text-foreground">Отзывы покупателей</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <Card key={index} className="border-border">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-yellow-500 fill-yellow-500" size={16} />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{review.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="delivery" className="py-20 px-4 bg-muted">
        <div className="container mx-auto max-w-3xl">
          <h3 className="text-4xl font-bold text-center mb-12 text-foreground">Доставка и оплата</h3>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg">Как происходит доставка?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Доставляем по всей России через СДЭК и Почту России. Сроки доставки 3-7 дней в зависимости от региона. Упаковываем веники в специальную влагозащитную упаковку.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg">Какие способы оплаты доступны?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Принимаем оплату картой онлайн, переводом на карту или наличными при получении. Безопасность платежей гарантируется.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg">Сколько стоит доставка?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Стоимость доставки рассчитывается индивидуально. При заказе от 3000 ₽ — доставка бесплатная по всей России.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-lg">Как хранить веники?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Храните веники в прохладном сухом месте, избегайте прямых солнечных лучей. Перед использованием запарьте в горячей воде 15-20 минут.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <h3 className="text-4xl font-bold mb-8 text-foreground">Контакты</h3>
          <Card className="border-border">
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="flex items-center justify-center gap-3">
                  <Icon name="Phone" className="text-primary" size={24} />
                  <a href="tel:+79001234567" className="text-xl hover:text-primary transition-colors">+7 (900) 123-45-67</a>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <Icon name="Mail" className="text-primary" size={24} />
                  <a href="mailto:info@banyavenik.ru" className="text-xl hover:text-primary transition-colors">info@banyavenik.ru</a>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <Icon name="MapPin" className="text-primary" size={24} />
                  <span className="text-xl text-muted-foreground">Москва, ул. Банная, 1</span>
                </div>
                <div className="flex justify-center gap-4 pt-4">
                  <Button variant="outline" size="icon">
                    <Icon name="Phone" size={20} />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Icon name="MessageCircle" size={20} />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Icon name="Send" size={20} />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-8 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="Leaf" size={24} />
            <span className="text-xl font-bold">БаняВеник</span>
          </div>
          <p className="text-sm opacity-90">© 2024 БаняВеник. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
