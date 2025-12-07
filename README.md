# goit-react-hw-02

Goit React Homework #02 - React Vite Project

## 🚀 Proje Teknolojileri

- **React** 19.2.0
- **Vite** 7.2.4
- **React-DOM** 19.2.0
- **Prettier** - Kod formatı standardı
- **ESLint** - Kod kalitesi kontrolü

## 📋 Proje Gereksinimleri

✅ Vite ile oluşturulmuş React projesi  
✅ CSS Modules desteği  
✅ Prettier entegrasyonu (`npm run format`)  
✅ GitHub Pages ve Vercel uyumlu ayarlar  
✅ src/components klasöründe bileşen yapısı  
✅ Varsayılan export (export default) kullanımı

## 📂 Proje Yapısı

```
src/
├── components/          # React bileşenleri
│   └── [Bileşen Adı]/
│       ├── ComponentName.jsx      # JSX dosyası
│       └── ComponentName.module.css # CSS Module dosyası
├── App.jsx
├── App.css
├── main.jsx
└── index.css
```

## 🛠️ NPM Komutları

```bash
# Geliştirme sunucusunu başlat
npm run dev

# Üretim için build yap
npm run build

# Build'i görüntüle
npm run preview

# Kodu Prettier ile formatla
npm run format

# ESLint kontrolü yap
npm run lint
```

## 🌐 Deployment

### GitHub Pages

- Base URL: `/goit-react-hw-02/`
- `vite.config.js` dosyasında otomatik olarak ayarlanmıştır

### Vercel

- `vercel.json` dosyası otomatik yapı ayarlarını içerir
- GitHub'dan bağladığınızda otomatik deploy olur

## 📝 Bileşen Oluşturma Şablonu

Her yeni bileşen için:

1. `src/components/ComponentName/` klasörü oluşturun
2. `ComponentName.jsx` dosyası oluşturun
3. (İsteğe bağlı) `ComponentName.module.css` dosyası oluşturun
4. Varsayılan export ile dışa aktar

### Örnek:

```jsx
// src/components/Button/Button.jsx
import styles from './Button.module.css';

export default function Button({ text }) {
  return <button className={styles.btn}>{text}</button>;
}
```

```css
/* src/components/Button/Button.module.css */
.btn {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.btn:hover {
  background-color: #0056b3;
}
```

## 📚 Kaynaklar

- [Vite Resmi Sitesi](https://vite.dev)
- [React Resmi Sitesi](https://react.dev)
- [Prettier Resmi Sitesi](https://prettier.io)
