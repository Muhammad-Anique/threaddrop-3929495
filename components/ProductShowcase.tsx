'use client'

import Image from 'next/image'
import { Shirt, Star, Truck, Shield } from 'lucide-react'

const products = [
  {
    id: 1,
    name: 'Midnight Black Tee',
    price: '$45',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=800&fit=crop',
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: 2,
    name: 'Washed Grey Classic',
    price: '$42',
    image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600&h=800&fit=crop',
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: 3,
    name: 'Off-White Essential',
    price: '$48',
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&h=800&fit=crop',
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: 4,
    name: 'Urban Drop Tee',
    price: '$50',
    image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&h=800&fit=crop',
    sizes: ['S', 'M', 'L', 'XL'],
  },
]

const features = [
  { icon: Star, title: 'Premium Quality', desc: '100% organic cotton' },
  { icon: Truck, title: 'Fast Shipping', desc: 'Free delivery worldwide' },
  { icon: Shield, title: 'Secure Payment', desc: '100% secure checkout' },
]

export default function ProductShowcase() {
  return (
    <section className="py-20 sm:py-32 bg-off-white" id="products">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-semibold tracking-widest uppercase text-grey-500 mb-4 block">
            The Collection
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-black tracking-tight mb-4">
            Premium Essentials
          </h2>
          <p className="text-lg text-grey-600 max-w-2xl mx-auto">
            Each piece is crafted with attention to detail, using premium materials for the perfect fit and feel.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative aspect-[3/4] overflow-hidden bg-grey-100">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              </div>

              {/* Product Info */}
              <div className="p-5">
                <h3 className="font-semibold text-lg text-black mb-1">{product.name}</h3>
                <p className="text-grey-600 font-medium mb-3">{product.price}</p>
                
                {/* Size Options */}
                <div className="flex gap-2">
                  {product.sizes.map((size) => (
                    <span
                      key={size}
                      className="w-8 h-8 flex items-center justify-center text-xs font-medium border border-grey-200 rounded text-grey-600 hover:border-black hover:text-black transition-colors cursor-pointer"
                    >
                      {size}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-6 bg-white rounded-xl"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-black rounded-full shrink-0">
                <feature.icon className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-black mb-1">{feature.title}</h4>
                <p className="text-grey-500 text-sm">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}