import { motion } from 'framer-motion';

interface ProductFeature {
  label: string;
  color: string;
}

interface ProductOrderInfo {
  minQuantity: string;
  completionTime: string;
  moq: string;
}

interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  features: ProductFeature[];
  orderInfo: ProductOrderInfo;
}

const products: Product[] = [
  {
    id: 'pacifier',
    name: 'Emzik',
    description: 'Ortodontik tasarım, BPA içermeyen silikon malzeme, sterilizasyona uygun',
    image: 'https://placehold.co/400x400/e2e8f0/ffffff?text=Emzik',
    features: [
      { label: 'Ortodontik', color: 'blue' },
      { label: 'BPA Free', color: 'blue' },
      { label: 'Steril', color: 'blue' },
    ],
    orderInfo: {
      minQuantity: '1.000 Adet',
      completionTime: '15-20 Gün',
      moq: '10.000 Adet/Ay',
    },
  },
  {
    id: 'bottle',
    name: 'Biberon',
    description: 'Anti-kolik sistem, geniş ağız yapısı, kolay temizlenebilir tasarım',
    image: 'https://placehold.co/400x400/e2e8f0/ffffff?text=Biberon',
    features: [
      { label: 'Anti-kolik', color: 'blue' },
      { label: 'Ergonomik', color: 'blue' },
      { label: 'BPA Free', color: 'blue' },
    ],
    orderInfo: {
      minQuantity: '500 Adet',
      completionTime: '20-25 Gün',
      moq: '5.000 Adet/Ay',
    },
  },
  {
    id: 'teether',
    name: 'Diş Kaşıyıcı',
    description: 'Farklı doku yüzeyleri, soğutulabilir tasarım, kolay kavrama',
    image: 'https://placehold.co/400x400/e2e8f0/ffffff?text=Dis+Kasiyici',
    features: [
      { label: 'Soğutmalı', color: 'blue' },
      { label: 'Multi-Doku', color: 'blue' },
      { label: 'Ergonomik', color: 'blue' },
    ],
    orderInfo: {
      minQuantity: '1.000 Adet',
      completionTime: '15-20 Gün',
      moq: '8.000 Adet/Ay',
    },
  },
  {
    id: 'aspirator',
    name: 'Burun Aspiratörü',
    description: 'Güvenli vakum sistemi, yumuşak uç, kolay temizlenebilir parçalar',
    image: 'https://placehold.co/400x400/e2e8f0/ffffff?text=Burun+Aspiratoru',
    features: [
      { label: 'Güvenli', color: 'blue' },
      { label: 'Hijyenik', color: 'blue' },
      { label: 'Pratik', color: 'blue' },
    ],
    orderInfo: {
      minQuantity: '500 Adet',
      completionTime: '20-25 Gün',
      moq: '5.000 Adet/Ay',
    },
  },
];

const ProductCard = ({ product, index }: { product: Product; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="group"
  >
    <div className="bg-white rounded-3xl p-8 hover:shadow-xl transition-all duration-300 h-full">
      <div className="aspect-square rounded-2xl bg-blue-50 mb-8 overflow-hidden relative group-hover:scale-105 transition-all duration-300">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url("${product.image}")` }}
          role="img"
          aria-label={product.name}
        />
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-4">{product.name}</h3>
      <p className="text-gray-600 mb-6">{product.description}</p>
      
      {/* Order Information */}
      <div className="mb-6 space-y-3 border-y border-gray-100 py-4">
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">Min. Sipariş</span>
          <span className="text-sm font-medium text-gray-900">{product.orderInfo.minQuantity}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">Tamamlanma</span>
          <span className="text-sm font-medium text-gray-900">{product.orderInfo.completionTime}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">Aylık Kapasite</span>
          <span className="text-sm font-medium text-gray-900">{product.orderInfo.moq}</span>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {product.features.map((feature, i) => (
          <span
            key={i}
            className={`px-3 py-1 bg-${feature.color}-50 text-${feature.color}-600 rounded-lg text-sm`}
          >
            {feature.label}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

export const Products = () => {
  return (
    <section className="py-32 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-24"
        >
          <span className="text-blue-600 font-semibold tracking-wide">ÜRÜNLERİMİZ</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mt-6 mb-8">
            Premium Bebek Ürünleri
          </h2>
          <p className="text-xl text-gray-600">
            En yüksek kalite standartlarında üretilen, bebeğinizin sağlığı ve konforu için tasarlanmış ürünler.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            className="bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-medium hover:bg-blue-700 transition-all"
          >
            Tüm Ürünleri İnceleyin
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}; 