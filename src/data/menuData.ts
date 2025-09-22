import { MenuCategory } from '../types';

export const menuCategories: MenuCategory[] = [
  {
    id: 'hot-drinks',
    name: 'Hot Drinks',
    nameAr: 'المشروبات الساخنة',
    items: [
      // Hot Drinks
      { id: 'hd-1', name: 'Espresso', nameAr: 'إسبريسو', price: 23, category: 'hot-drinks', popular: true },
      { id: 'hd-2', name: 'Americano', nameAr: 'أمريكانو', price: 23, category: 'hot-drinks' },
      { id: 'hd-3', name: 'Piccolo', nameAr: 'بيكولو', price: 23, category: 'hot-drinks' },
      { id: 'hd-4', name: 'Cortado', nameAr: 'كورتادو', price: 23, category: 'hot-drinks' },
      { id: 'hd-5', name: 'Latte', nameAr: 'لاتيه', price: 29, category: 'hot-drinks' },
      { id: 'hd-6', name: 'Cappuccino', nameAr: 'كابتشينو', price: 29, category: 'hot-drinks', popular: true },
      { id: 'hd-7', name: 'Flat White', nameAr: 'فلات وايت', price: 29, category: 'hot-drinks' },
      { id: 'hd-8', name: 'Hot Chocolate', nameAr: 'شوكولاتة ساخنة', price: 45, category: 'hot-drinks' },
      { id: 'hd-9', name: 'Hot Matcha', nameAr: 'ماتشا ساخنة', price: 42, category: 'hot-drinks' },
      { id: 'hd-10', name: 'English Breakfast Tea', nameAr: 'شاي إنجليزي', price: 22, category: 'hot-drinks' },
      { id: 'hd-11', name: 'Earl Grey Tea', nameAr: 'شاي إيرل جراي', price: 22, category: 'hot-drinks' },
      { id: 'hd-12', name: 'Jasmine Tea', nameAr: 'شاي ياسمين', price: 26, category: 'hot-drinks' },
      { id: 'hd-13', name: 'Chai Latte', nameAr: 'تشاي لاتيه', price: 19, category: 'hot-drinks' },
    ]
  },
  {
    id: 'cold-drinks',
    name: 'Cold Drinks',
    nameAr: 'المشروبات الباردة',
    items: [
      // Cold Drinks & Juices
      { id: 'cd-1', name: 'Iced Long Black', nameAr: 'لونج بلاك مثلج', price: 23, category: 'cold-drinks' },
      { id: 'cd-2', name: 'Iced Americano', nameAr: 'أمريكانو مثلج', price: 23, category: 'cold-drinks' },
      { id: 'cd-3', name: 'Iced Latte', nameAr: 'لاتيه مثلج', price: 29, category: 'cold-drinks' },
      { id: 'cd-4', name: 'Iced Cappuccino', nameAr: 'كابتشينو مثلج', price: 29, category: 'cold-drinks' },
      { id: 'cd-5', name: 'Iced Mocha', nameAr: 'موكا مثلجة', price: 31, category: 'cold-drinks' },
      { id: 'cd-6', name: 'Affogato', nameAr: 'أفوجاتو', price: 35, category: 'cold-drinks' },
      { id: 'cd-7', name: 'Fresh Orange Juice', nameAr: 'عصير برتقال طازج', price: 31, category: 'cold-drinks' },
      { id: 'cd-8', name: 'Mango Juice', nameAr: 'عصير مانجو', price: 33, category: 'cold-drinks' },
      { id: 'cd-9', name: 'Hibiscus', nameAr: 'كركديه', price: 33, category: 'cold-drinks' },
      { id: 'cd-10', name: 'Mojito Strawberry', nameAr: 'موهيتو فراولة', price: 33, category: 'cold-drinks' },
      { id: 'cd-11', name: 'Mojito Passion Fruit', nameAr: 'موهيتو باشن فروت', price: 33, category: 'cold-drinks' },
      { id: 'cd-12', name: 'Mojito Mango', nameAr: 'موهيتو مانجو', price: 33, category: 'cold-drinks' },
      { id: 'cd-13', name: 'Lemon and Mint', nameAr: 'ليمون ونعناع', price: 26, category: 'cold-drinks' },
      { id: 'cd-14', name: 'Wish Beauty', nameAr: 'ويش بيوتي', price: 42, category: 'cold-drinks' },
      { id: 'cd-15', name: 'Blushy Sip', nameAr: 'بلشي سيب', price: 35, category: 'cold-drinks' },
      { id: 'cd-16', name: 'Queen Wish', nameAr: 'كوين ويش', price: 28, category: 'cold-drinks' },
    ]
  },
  {
    id: 'desserts',
    name: 'Desserts',
    nameAr: 'الحلويات',
    items: [
      // Desserts
      { id: 'd-1', name: 'Walnut Cake Box', nameAr: 'بوكس كيك الجوز', price: 336, category: 'desserts' },
      { id: 'd-2', name: 'Walnut Cake Circle', nameAr: 'كيك الجوز الدائري', price: 360, category: 'desserts', description: 'Pastry custard cream, almond sponge cake, almond butter, peeled almond nuts, caramelized pecan nut, chocolate sauce' },
      { id: 'd-3', name: 'Mirror Box', nameAr: 'بوكس ميرور', price: 114, category: 'desserts' },
      { id: 'd-4', name: 'Mango Cheesecake Box', nameAr: 'بوكس تشيز كيك مانجو', price: 336, category: 'desserts' },
      { id: 'd-5', name: 'Date Pudding Box', nameAr: 'بوكس بودنغ التمر', price: 312, category: 'desserts' },
      { id: 'd-6', name: 'Coconut Cake Box', nameAr: 'بوكس كيك جوز الهند', price: 312, category: 'desserts' },
      { id: 'd-7', name: 'Tiramisu', nameAr: 'تيراميسو', price: 60, category: 'desserts', description: 'Layers of espresso-soaked ladyfingers + creamy mascarpone, dusted with cocoa.' },
      { id: 'd-8', name: 'Raspberry Cheesecake', nameAr: 'تشيز كيك توت', price: 63, category: 'desserts', description: 'Creamy cheesecake with raspberry flavor, buttery crust.' },
      { id: 'd-9', name: 'Caramel Cheesecake', nameAr: 'تشيز كيك كراميل', price: 63, category: 'desserts', description: 'Rich caramel swirl + cream cheese.' },
      { id: 'd-10', name: 'Golden Wishes', nameAr: 'جولدن ويشز', price: 57, category: 'desserts', description: 'Snickers sauce, kiri cream sauce, feuilletine flakes, digestive biscuit.' },
      { id: 'd-11', name: 'Walnut Cake Small', nameAr: 'كيك الجوز صغير', price: 59, category: 'desserts', description: 'Pastry custard cream, almond sponge cake, almond butter, peeled almond nuts, caramelized pecan nut, chocolate sauce.' },
      { id: 'd-12', name: 'All I Wish', nameAr: 'أول آي ويش', price: 70, category: 'desserts' },
      { id: 'd-13', name: 'Kunafa Dates Pudding', nameAr: 'بودينغ التمر كنافة', price: 57, category: 'desserts', description: 'Dates cake, kunafa, pecan nut caramel.' },
    ]
  },
  {
    id: 'breakfast',
    name: 'Breakfast',
    nameAr: 'الفطور',
    items: [
      // Breakfast
      { id: 'b-1', name: 'Shashouka', nameAr: 'شكشوكة', price: 58, category: 'breakfast', description: 'Fresh peeled tomatoes, eggs, jalapeño pepper (medium spicy)' },
      { id: 'b-2', name: 'Truffle & Egg Puff', nameAr: 'ترافل اند ايج بف', price: 74, category: 'breakfast', description: 'Eggs, truffle sauce, yellow cheddar cheese, white cheddar cheese, Parmesan cheese, fresh truffles, Mozzarella' },
      { id: 'b-3', name: 'Eggs Benedict', nameAr: 'ايجز بنديكت', price: 59, category: 'breakfast', description: 'English muffin, poached egg, Hollandaise sauce, salt, pepper, mashed avocado' },
      { id: 'b-4', name: 'Mushroom Toast', nameAr: 'توست مشروم', price: 64, category: 'breakfast', description: 'Fresh mushrooms, herbs, cream of mushrooms, toasted brioche bread' },
      { id: 'b-5', name: 'Eggs and Mushroom Toast', nameAr: 'توست بيض ومشروم', price: 67, category: 'breakfast', description: 'Egg, fresh mushrooms cooked with herbs, cream full fat, and toasted brioche bread' },
      { id: 'b-6', name: 'Eggs with Caramelized Onion Sandwich', nameAr: 'ساندويتش بيض وبصل مكرمل', price: 47, category: 'breakfast', description: 'Egg, potato soft bread, caramelized onion, siracha sauce, mayonnaise' },
      { id: 'b-7', name: 'Wish Acai', nameAr: 'ويش اساي', price: 66, category: 'breakfast' },
      { id: 'b-8', name: 'Classic French Toast', nameAr: 'توست فرنسي كلاسيك', price: 62, category: 'breakfast', description: 'Toasted bread dipped in an egg mixture.' },
      { id: 'b-9', name: 'Nutella French Toast', nameAr: 'توست فرنسي نوتيلا', price: 71, category: 'breakfast', description: 'French toast topped with Nutella.' },
      { id: 'b-10', name: 'Cinnamon French Toast', nameAr: 'توست فرنسي بالقرفة', price: 62, category: 'breakfast', description: 'Sweet, cinnamon-infused toast.' },
      { id: 'b-11', name: 'Classic Avocado on Toast', nameAr: 'توست أفوكادو كلاسيك', price: 45, category: 'breakfast' },
      { id: 'b-12', name: 'Avocado OM Toast With Halloumi', nameAr: 'توست أفوكادو مع حلوم', price: 48, category: 'breakfast' },
      { id: 'b-13', name: 'Avocado Toast With Eggs', nameAr: 'توست أفوكادو مع بيض', price: 45, category: 'breakfast' },
      { id: 'b-14', name: 'Cheese Croissant', nameAr: 'كرواسان جبنة', price: 26, category: 'breakfast', description: 'Flaky pastry with melted cheese' },
      { id: 'b-15', name: 'Babka Labaneh Zataar', nameAr: 'بابكا لبنة وزعتر', price: 57, category: 'breakfast' },
      { id: 'b-16', name: 'Beetroot Avocado Toast', nameAr: 'توست أفوكادو و بنجر', price: 57, category: 'breakfast' },
      { id: 'b-17', name: 'Shakshouka Buns', nameAr: 'بنز شكشوكة', price: 47, category: 'breakfast' },
      { id: 'b-18', name: 'Shashouka Toast', nameAr: 'توست شكشوكة', price: 45, category: 'breakfast' },
      { id: 'b-19', name: 'Croissant Benedict', nameAr: 'كرواسان بنديكت', price: 46, category: 'breakfast' },
    ]
  },
  {
    id: 'snacks',
    name: 'Snacks',
    nameAr: 'الوجبات الخفيفة',
    items: [
      {
        id: 's-1',
        name: 'Cookies',
        nameAr: 'كوكيز',
        price: 8,
        category: 'snacks'
      },
      {
        id: 's-2',
        name: 'Muffins',
        nameAr: 'مافن',
        price: 15,
        category: 'snacks'
      },
      {
        id: 's-3',
        name: 'Donuts',
        nameAr: 'دونات',
        price: 12,
        category: 'snacks'
      },
      // Burger / Sandwich
      { id: 's-1', name: 'Chicken Burger', nameAr: 'برجر دجاج', price: 47, category: 'snacks', description: 'Chicken breast, grilled with melted cheese etc.' },
      { id: 's-2', name: 'Beef Burger', nameAr: 'برجر لحم', price: 47, category: 'snacks' },
      // Fatair
      { id: 's-3', name: 'Fatira Meat Cheeses', nameAr: 'فطيرة لحم وجبن', price: 33, category: 'snacks', description: 'Lamb meat, cheddar, mozzarella, spices, fresh pepper; edges with sesame & eggs.' },
      { id: 's-4', name: 'Fatira Chilli Meat', nameAr: 'فطيرة لحم حار', price: 35, category: 'snacks', description: 'Similar to above + hotter pepper.' },
      { id: 's-5', name: 'Fatira Zatar Cheese', nameAr: 'فطيرة زعتر وجبن', price: 24, category: 'snacks', description: 'Zaatar, mozzarella, edges with sesame & eggs.' },
      { id: 's-6', name: 'Fatira Mix Cheese', nameAr: 'فطيرة جبن مشكل', price: 35, category: 'snacks', description: 'Mixed cheeses, sesame etc.' },
      { id: 's-7', name: 'Musakhan Rolls', nameAr: 'رول مسخن', price: 36, category: 'snacks', description: 'Chopped chicken, onions, sumac, pine nuts, pomegranate molasses, yogurt.' },
      // Manakeesh
      { id: 's-8', name: 'Manakeesh Zaatar', nameAr: 'مناقيش زعتر', price: 35, category: 'snacks' },
      { id: 's-9', name: 'Manakeesh Cheese', nameAr: 'مناقيش جبنة', price: 30, category: 'snacks' },
      { id: 's-10', name: 'Manakeesh Mouhamara Cheese', nameAr: 'مناقيش محمرة وجبنة', price: 38, category: 'snacks' },
      { id: 's-11', name: 'Manakeesh Msakhan', nameAr: 'مناقيش مسخن', price: 47, category: 'snacks' },
      { id: 's-12', name: 'Manakeesh Spicy Cheese', nameAr: 'مناقيش جبنة حارة', price: 38, category: 'snacks' },
      // Dinner / Pasta
      { id: 's-13', name: 'Wizza', nameAr: 'ويزا', price: 66, category: 'snacks' },
      { id: 's-14', name: 'Pink Pasta', nameAr: 'مكرونة وردية', price: 62, category: 'snacks' },
      { id: 's-15', name: 'Alfredo Pasta', nameAr: 'مكرونة ألفريدو', price: 62, category: 'snacks' },
      { id: 's-16', name: 'Penne Arabiata', nameAr: 'مكرونة أرابياتا', price: 57, category: 'snacks', description: 'Spicy tomato sauce version.' },
      // Salad
      { id: 's-17', name: 'Caesar Salad With Chicken', nameAr: 'سيزر دجاج', price: 54, category: 'snacks', description: 'Romaine lettuce, croutons, Parmesan cheese  topped with chicken.' },
      { id: 's-18', name: 'Mango Salad', nameAr: 'سلطة مانجو', price: 54, category: 'snacks', description: 'Fresh mango, various berries, caramelized walnuts, wild arugula, herb dressing.' },
      { id: 's-19', name: 'Caesar Salad Plain', nameAr: 'سيزر عادي', price: 42, category: 'snacks', description: 'نفس سلطة السيزر بدون دجاج.' },
      // إضافة الأصناف القديمة إن وجدت
      { id: 's-20', name: 'Sandwiches', nameAr: 'ساندويتش', price: 20, category: 'snacks' }
    ]
  }
];