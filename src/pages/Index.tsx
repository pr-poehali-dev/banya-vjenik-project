import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Index = () => {
  const products = [
    {
      id: 1,
      name: "Товар 1",
      price: "1000 ₽",
      image: "https://cdn.poehali.dev/projects/9f90d186-7552-4034-9da9-a9109c328a12/files/2fbe94c8-107a-49f7-b61e-e49a22fa9c7a.jpg"
    },
    {
      id: 2,
      name: "Товар 2",
      price: "1500 ₽",
      image: "https://cdn.poehali.dev/projects/9f90d186-7552-4034-9da9-a9109c328a12/files/493604eb-576b-4b90-bc56-f71acca5cf71.jpg"
    },
    {
      id: 3,
      name: "Товар 3",
      price: "1200 ₽",
      image: "https://cdn.poehali.dev/projects/9f90d186-7552-4034-9da9-a9109c328a12/files/1ea72516-74ed-4da1-a761-7ba01f9e867b.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-white border-b border-border">
        <nav className="container mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-foreground">Магазин</h1>
        </nav>
      </header>

      <section className="py-16 px-4 bg-gradient-to-b from-background to-muted">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-5xl font-bold mb-6 text-foreground">
            Заголовок магазина
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Описание вашего магазина
          </p>
          <Button size="lg">Смотреть товары</Button>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card key={product.id} className="overflow-hidden">
                <div className="aspect-square overflow-hidden bg-white">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{product.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">{product.price}</span>
                    <Button>Купить</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-8 px-4">
        <div className="container mx-auto text-center">
          <p className="text-sm">© 2024 Магазин</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
