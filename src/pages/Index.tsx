import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });

  const portfolio = [
    {
      id: 1,
      title: 'Портретная фотосессия',
      image: 'https://cdn.poehali.dev/projects/e9f36f68-dc56-4231-ba80-6b6f2235382d/files/a27f5403-6323-4548-a858-e2a6a7f428ad.jpg',
      category: 'portrait'
    },
    {
      id: 2,
      title: 'Свадебная съёмка',
      image: 'https://cdn.poehali.dev/projects/e9f36f68-dc56-4231-ba80-6b6f2235382d/files/5bedb00e-0380-4b3b-bf00-93cb07149c03.jpg',
      category: 'wedding'
    },
    {
      id: 3,
      title: 'Семейная фотосессия',
      image: 'https://cdn.poehali.dev/projects/e9f36f68-dc56-4231-ba80-6b6f2235382d/files/70eb9b21-9b7a-450d-b059-75fbc97f36c8.jpg',
      category: 'family'
    }
  ];

  const services = [
    {
      title: 'Портретная съёмка',
      price: 'от 5 000 ₽',
      description: 'Индивидуальная портретная съёмка в студии или на природе',
      icon: 'User'
    },
    {
      title: 'Свадебная съёмка',
      price: 'от 25 000 ₽',
      description: 'Полное сопровождение вашего торжества от сборов до первого танца',
      icon: 'Heart'
    },
    {
      title: 'Семейная фотосессия',
      price: 'от 7 000 ₽',
      description: 'Тёплые семейные кадры, которые сохранят ваши воспоминания',
      icon: 'Users'
    },
    {
      title: 'Love Story',
      price: 'от 8 000 ₽',
      description: 'Романтическая фотосессия для влюблённых пар',
      icon: 'Heart'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Я свяжусь с вами в ближайшее время для обсуждения деталей.",
    });
    setFormData({
      name: '',
      phone: '',
      email: '',
      service: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-heading font-semibold">Анна Смирнова</h1>
          <div className="hidden md:flex gap-8 text-sm">
            <a href="#portfolio" className="hover:text-accent transition-colors">Портфолио</a>
            <a href="#services" className="hover:text-accent transition-colors">Услуги</a>
            <a href="#about" className="hover:text-accent transition-colors">Обо мне</a>
            <a href="#contact" className="hover:text-accent transition-colors">Контакты</a>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-6xl md:text-8xl font-heading font-semibold mb-6 animate-fade-in">
            Фотограф<br />в Москве
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-in">
            Создаю живые, эмоциональные кадры, которые хочется пересматривать снова и снова
          </p>
          <Button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            size="lg" 
            className="text-lg animate-fade-in"
          >
            Записаться на съёмку
          </Button>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-4 bg-secondary/50">
        <div className="container mx-auto">
          <h3 className="text-4xl md:text-5xl font-heading font-semibold mb-4 text-center">Портфолио</h3>
          <p className="text-center text-muted-foreground mb-12 text-lg">Мои работы говорят сами за себя</p>
          
          <div className="grid md:grid-cols-3 gap-6">
            {portfolio.map((item) => (
              <Card key={item.id} className="overflow-hidden group cursor-pointer border-0 shadow-lg">
                <div className="relative h-96 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <h4 className="text-white text-xl font-heading">{item.title}</h4>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <h3 className="text-4xl md:text-5xl font-heading font-semibold mb-4 text-center">Услуги</h3>
          <p className="text-center text-muted-foreground mb-12 text-lg">Индивидуальный подход к каждой съёмке</p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, idx) => (
              <Card key={idx} className="p-8 hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name={service.icon} size={24} className="text-accent" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-2xl font-heading font-semibold mb-2">{service.title}</h4>
                      <p className="text-accent font-semibold text-xl mb-3">{service.price}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-2xl">
          <h3 className="text-4xl md:text-5xl font-heading font-semibold mb-4 text-center">Связаться со мной</h3>
          <p className="text-center text-muted-foreground mb-12 text-lg">Оставьте заявку, и я свяжусь с вами для обсуждения деталей</p>
          
          <Card className="p-8 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Ваше имя</Label>
                <Input 
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                />
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="phone">Телефон</Label>
                  <Input 
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="service">Тип съёмки</Label>
                <Input 
                  id="service"
                  placeholder="Например: портретная фотосессия"
                  value={formData.service}
                  onChange={(e) => setFormData({...formData, service: e.target.value})}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Ваши пожелания</Label>
                <Textarea 
                  id="message"
                  rows={4}
                  placeholder="Расскажите подробнее о желаемой съёмке..."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                />
              </div>

              <Button type="submit" className="w-full" size="lg">
                Отправить заявку
              </Button>
            </form>
          </Card>

          <div className="mt-12 text-center space-y-4">
            <div className="flex justify-center gap-6">
              <a href="tel:+79991234567" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                <Icon name="Phone" size={20} />
                <span>+7 (999) 123-45-67</span>
              </a>
              <a href="mailto:anna@photo.ru" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                <Icon name="Mail" size={20} />
                <span>anna@photo.ru</span>
              </a>
            </div>
            <div className="flex justify-center gap-4">
              <a href="#" className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-accent hover:text-white transition-colors">
                <Icon name="Instagram" size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-accent hover:text-white transition-colors">
                <Icon name="Facebook" size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-8 px-4">
        <div className="container mx-auto text-center text-muted-foreground text-sm">
          <p>© 2024 Анна Смирнова. Фотограф в Москве</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;