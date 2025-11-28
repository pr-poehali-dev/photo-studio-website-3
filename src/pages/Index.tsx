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
  const [activeFilter, setActiveFilter] = useState('all');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    service: '',
    message: ''
  });

  const studios = [
    {
      id: 1,
      name: 'Светлая студия',
      image: 'https://cdn.poehali.dev/projects/e9f36f68-dc56-4231-ba80-6b6f2235382d/files/ce1b9372-8f2c-43d5-a1c7-413d09aa995f.jpg',
      category: 'light',
      area: '50 м²',
      description: 'Просторная студия с белым циклорамом и естественным освещением'
    },
    {
      id: 2,
      name: 'Тёмная студия',
      image: 'https://cdn.poehali.dev/projects/e9f36f68-dc56-4231-ba80-6b6f2235382d/files/2e7b6956-6614-40ec-a803-5ab0be9a36b3.jpg',
      category: 'dark',
      area: '40 м²',
      description: 'Атмосферная лофт-студия с кирпичными стенами и чёрным фоном'
    },
    {
      id: 3,
      name: 'Уютная студия',
      image: 'https://cdn.poehali.dev/projects/e9f36f68-dc56-4231-ba80-6b6f2235382d/files/3a01d8a4-37e4-4249-9a90-d189ead731d6.jpg',
      category: 'cozy',
      area: '35 м²',
      description: 'Студия в стиле бохо с винтажной мебелью и растениями'
    }
  ];

  const services = [
    { name: 'Почасовая аренда студии', price: '2 500 ₽/час', icon: 'Clock' },
    { name: 'Полный день (8 часов)', price: '15 000 ₽', icon: 'Calendar' },
    { name: 'Фотосессия с фотографом', price: 'от 5 000 ₽', icon: 'Camera' },
    { name: 'Видеосъёмка', price: 'от 8 000 ₽', icon: 'Video' }
  ];

  const filteredStudios = activeFilter === 'all' 
    ? studios 
    : studios.filter(s => s.category === activeFilter);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    setFormData({
      name: '',
      phone: '',
      email: '',
      date: '',
      time: '',
      service: '',
      message: ''
    });
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-heading font-bold">PHOTO STUDIO</h1>
            <div className="hidden md:flex gap-8">
              <button onClick={() => scrollToSection('hero')} className="hover:text-primary transition-colors">Главная</button>
              <button onClick={() => scrollToSection('gallery')} className="hover:text-primary transition-colors">Галерея</button>
              <button onClick={() => scrollToSection('services')} className="hover:text-primary transition-colors">Услуги</button>
              <button onClick={() => scrollToSection('booking')} className="hover:text-primary transition-colors">Бронирование</button>
              <button onClick={() => scrollToSection('contacts')} className="hover:text-primary transition-colors">Контакты</button>
            </div>
          </div>
        </div>
      </nav>

      <section id="hero" className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-7xl md:text-9xl font-heading font-bold mb-6 animate-fade-in">
            СОЗДАЁМ<br />
            <span className="text-primary">ШЕДЕВРЫ</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-in">
            Профессиональные фотостудии с уникальными интерьерами для вашего творчества
          </p>
          <Button 
            onClick={() => scrollToSection('booking')} 
            size="lg" 
            className="text-lg px-8 py-6 animate-fade-in"
          >
            Забронировать студию
          </Button>
        </div>
      </section>

      <section id="gallery" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <h3 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-center">Наши студии</h3>
          <p className="text-center text-muted-foreground mb-12 text-lg">Выберите идеальное пространство для вашей съёмки</p>
          
          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            <Button 
              variant={activeFilter === 'all' ? 'default' : 'outline'}
              onClick={() => setActiveFilter('all')}
            >
              Все студии
            </Button>
            <Button 
              variant={activeFilter === 'light' ? 'default' : 'outline'}
              onClick={() => setActiveFilter('light')}
            >
              Светлые
            </Button>
            <Button 
              variant={activeFilter === 'dark' ? 'default' : 'outline'}
              onClick={() => setActiveFilter('dark')}
            >
              Тёмные
            </Button>
            <Button 
              variant={activeFilter === 'cozy' ? 'default' : 'outline'}
              onClick={() => setActiveFilter('cozy')}
            >
              Уютные
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStudios.map((studio) => (
              <Card key={studio.id} className="overflow-hidden group hover:shadow-2xl transition-shadow duration-300">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={studio.image} 
                    alt={studio.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <h4 className="text-2xl font-heading font-semibold mb-2">{studio.name}</h4>
                  <p className="text-muted-foreground mb-3">{studio.description}</p>
                  <div className="flex items-center gap-2 text-sm text-primary">
                    <Icon name="Home" size={16} />
                    <span>{studio.area}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <h3 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-center">Услуги и цены</h3>
          <p className="text-center text-muted-foreground mb-12 text-lg">Гибкие тарифы для любых задач</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {services.map((service, idx) => (
              <Card key={idx} className="text-center p-8 hover:border-primary transition-colors">
                <CardContent className="p-0">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name={service.icon} size={32} className="text-primary" />
                  </div>
                  <h4 className="text-xl font-heading font-semibold mb-3">{service.name}</h4>
                  <p className="text-2xl font-bold text-primary">{service.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="booking" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-2xl">
          <h3 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-center">Онлайн-бронирование</h3>
          <p className="text-center text-muted-foreground mb-12 text-lg">Забронируйте студию за пару минут</p>
          
          <Card className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Ваше имя</Label>
                  <Input 
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                  />
                </div>
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

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="date">Дата съёмки</Label>
                  <Input 
                    id="date"
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="time">Время</Label>
                  <Input 
                    id="time"
                    type="time"
                    value={formData.time}
                    onChange={(e) => setFormData({...formData, time: e.target.value})}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="service">Услуга</Label>
                <Input 
                  id="service"
                  placeholder="Например: аренда светлой студии"
                  value={formData.service}
                  onChange={(e) => setFormData({...formData, service: e.target.value})}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Дополнительные пожелания</Label>
                <Textarea 
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                />
              </div>

              <Button type="submit" className="w-full" size="lg">
                Отправить заявку
              </Button>
            </form>
          </Card>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h3 className="text-4xl md:text-5xl font-heading font-bold mb-4">Контакты</h3>
          <p className="text-muted-foreground mb-12 text-lg">Мы всегда на связи</p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <Icon name="Phone" size={28} className="text-primary" />
              </div>
              <h4 className="font-heading font-semibold text-xl mb-2">Телефон</h4>
              <p className="text-muted-foreground">+ 7 958 188 57 51</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <Icon name="Mail" size={28} className="text-primary" />
              </div>
              <h4 className="font-heading font-semibold text-xl mb-2">Email</h4>
              <p className="text-muted-foreground">info@photostudio.ru</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <Icon name="MapPin" size={28} className="text-primary" />
              </div>
              <h4 className="font-heading font-semibold text-xl mb-2">Адрес</h4>
              <p className="text-muted-foreground">г. Москва, ул. Примерная, 123</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-8 px-4">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>© 2024 Photo Studio. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;