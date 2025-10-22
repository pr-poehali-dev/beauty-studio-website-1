import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface StaffMember {
  id: number;
  name: string;
  specialty: string;
  image: string;
  schedule: {
    day: string;
    start: string;
    end: string;
  }[];
  available: boolean;
}

const BOOKING_URL = 'https://yclients.com/';

const staffMembers: StaffMember[] = [
  {
    id: 1,
    name: 'Анна Петрова',
    specialty: 'Стилист-колорист',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
    schedule: [
      { day: 'Пн-Пт', start: '10:00', end: '20:00' },
      { day: 'Сб', start: '11:00', end: '18:00' }
    ],
    available: true
  },
  {
    id: 2,
    name: 'Мария Соколова',
    specialty: 'Мастер маникюра',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
    schedule: [
      { day: 'Вт-Сб', start: '09:00', end: '19:00' }
    ],
    available: true
  },
  {
    id: 3,
    name: 'Елена Волкова',
    specialty: 'Визажист',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400',
    schedule: [
      { day: 'Пн-Пт', start: '11:00', end: '21:00' },
      { day: 'Вс', start: '12:00', end: '17:00' }
    ],
    available: false
  },
  {
    id: 4,
    name: 'Ольга Иванова',
    specialty: 'Мастер по бровям',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400',
    schedule: [
      { day: 'Ср-Вс', start: '10:00', end: '19:00' }
    ],
    available: true
  },
  {
    id: 5,
    name: 'Светлана Кузнецова',
    specialty: 'Массажист',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400',
    schedule: [
      { day: 'Пн-Сб', start: '09:00', end: '18:00' }
    ],
    available: true
  },
  {
    id: 6,
    name: 'Дарья Смирнова',
    specialty: 'Косметолог',
    image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400',
    schedule: [
      { day: 'Вт-Сб', start: '10:00', end: '20:00' }
    ],
    available: true
  },
  {
    id: 7,
    name: 'Виктория Павлова',
    specialty: 'Парикмахер-стилист',
    image: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=400',
    schedule: [
      { day: 'Пн-Вс', start: '11:00', end: '21:00' }
    ],
    available: false
  }
];

const services = [
  { icon: 'Scissors', title: 'Стрижки и укладки', description: 'Профессиональные услуги парикмахера' },
  { icon: 'Sparkles', title: 'Окрашивание', description: 'Все виды окрашивания волос' },
  { icon: 'Hand', title: 'Маникюр и педикюр', description: 'Nail-дизайн любой сложности' },
  { icon: 'Star', title: 'Макияж', description: 'Дневной и вечерний макияж' },
  { icon: 'Heart', title: 'Косметология', description: 'Уход за лицом и телом' },
  { icon: 'Flower2', title: 'SPA-процедуры', description: 'Массаж и релаксация' }
];

export default function Index() {
  const [selectedStaff, setSelectedStaff] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-white">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-purple-100">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
            BEAUTY STUDIO
          </h1>
          <nav className="hidden md:flex gap-6">
            <a href="#services" className="text-sm font-medium hover:text-primary transition-colors">Услуги</a>
            <a href="#team" className="text-sm font-medium hover:text-primary transition-colors">Команда</a>
            <a href="#gallery" className="text-sm font-medium hover:text-primary transition-colors">Галерея</a>
            <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button 
            className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700"
            onClick={() => window.open(BOOKING_URL, '_blank')}
          >
            Записаться
          </Button>
        </div>
      </header>

      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-200/30 via-purple-200/30 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Роскошь и красота
              <span className="block bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                в каждой детали
              </span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Премиальная студия красоты с командой из 7 мастеров высшего класса
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-lg px-8"
                onClick={() => window.open(BOOKING_URL, '_blank')}
              >
                <Icon name="Calendar" className="mr-2" size={20} />
                Записаться онлайн
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 border-2">
                <Icon name="Phone" className="mr-2" size={20} />
                Позвонить
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Наши услуги</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-600 to-purple-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="border-2 hover:border-primary hover:shadow-xl transition-all duration-300 animate-scale-in group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-100 to-purple-100 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon name={service.icon as any} className="text-primary" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="team" className="py-20 bg-gradient-to-br from-purple-50/50 to-pink-50/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Наша команда</h2>
            <p className="text-xl text-muted-foreground mb-2">7 мастеров высшего класса</p>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-600 to-purple-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {staffMembers.map((staff, index) => (
              <Card
                key={staff.id}
                className={`cursor-pointer transition-all duration-300 hover:shadow-2xl animate-scale-in ${
                  selectedStaff === staff.id ? 'ring-2 ring-primary shadow-2xl' : ''
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => setSelectedStaff(selectedStaff === staff.id ? null : staff.id)}
              >
                <CardContent className="p-6">
                  <div className="relative mb-4">
                    <div className="aspect-square rounded-2xl overflow-hidden mb-4 relative">
                      <img
                        src={staff.image}
                        alt={staff.name}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-3 right-3">
                        {staff.available ? (
                          <Badge className="bg-green-500 hover:bg-green-600">
                            <Icon name="Check" size={14} className="mr-1" />
                            Доступен
                          </Badge>
                        ) : (
                          <Badge variant="secondary">
                            <Icon name="Clock" size={14} className="mr-1" />
                            Занят
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold mb-1">{staff.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4 flex items-center">
                    <Icon name="Briefcase" size={14} className="mr-1" />
                    {staff.specialty}
                  </p>

                  <div className="space-y-2">
                    <div className="flex items-start text-sm">
                      <Icon name="Calendar" size={16} className="mr-2 mt-0.5 text-primary flex-shrink-0" />
                      <div className="flex-1">
                        {staff.schedule.map((sch, idx) => (
                          <div key={idx} className="flex justify-between items-center mb-1">
                            <span className="font-medium">{sch.day}</span>
                            <span className="text-muted-foreground">{sch.start} - {sch.end}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <Button 
                    className="w-full mt-4 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(BOOKING_URL, '_blank');
                    }}
                  >
                    <Icon name="Calendar" className="mr-2" size={16} />
                    Записаться
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Наши работы</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-600 to-purple-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600',
              'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600',
              'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=600',
              'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=600',
              'https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=600',
              'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=600'
            ].map((img, idx) => (
              <div 
                key={idx} 
                className="aspect-square rounded-2xl overflow-hidden group cursor-pointer animate-scale-in"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <img
                  src={img}
                  alt={`Gallery ${idx + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-gradient-to-br from-pink-600 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Свяжитесь с нами</h2>
              <p className="text-lg opacity-90">Мы всегда рады новым клиентам</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="animate-fade-in">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="MapPin" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Адрес</h3>
                <p className="opacity-90">г. Москва, ул. Красоты, д. 1</p>
              </div>

              <div className="animate-fade-in" style={{ animationDelay: '100ms' }}>
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Phone" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Телефон</h3>
                <p className="opacity-90">+7 (495) 123-45-67</p>
              </div>

              <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Clock" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Режим работы</h3>
                <p className="opacity-90">Пн-Вс: 09:00 - 21:00</p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Button 
                size="lg" 
                variant="secondary" 
                className="bg-white text-primary hover:bg-white/90 text-lg px-8"
                onClick={() => window.open(BOOKING_URL, '_blank')}
              >
                <Icon name="Calendar" className="mr-2" size={20} />
                Записаться сейчас
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
            BEAUTY STUDIO
          </h3>
          <p className="text-gray-400 mb-4">Роскошь и красота в каждой детали</p>
          <div className="flex justify-center gap-4">
            <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
              <Icon name="Instagram" size={20} />
            </a>
            <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
              <Icon name="Facebook" size={20} />
            </a>
            <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
              <Icon name="MessageCircle" size={20} />
            </a>
          </div>
          <p className="text-sm text-gray-500 mt-8">© 2024 Beauty Studio. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
}