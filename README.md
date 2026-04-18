📖 Quran Web Application – Frontend

A modern, fast, and responsive Quran web application built with Next.js (SSG) and Tailwind CSS. Users can browse all Surahs, read Ayahs with translations, search verses, and customize their reading experience.

🚀 Live Demo

🔗 https://your-live-link.vercel.app

📂 Repository

🔗 https://github.com/your-username/quran-frontend

🛠️ Tech Stack
⚡ Next.js (Static Site Generation - SSG)
🎨 Tailwind CSS
⚛️ React.js
🌐 REST API (Node.js Backend)
💾 localStorage (for saving settings)
✨ Features
📜 Surah List
Displays all 114 Surahs
Arabic & English names
📖 Ayah Page
Shows all verses of a selected Surah
Includes:
Arabic text
English translation
🔍 Search Ayahs
Search by translation text
Real-time filtering
⚙️ Settings Panel

User customization options:

🅰️ Arabic Font Selection (at least 2 fonts)
🔠 Arabic Font Size Control
🔡 Translation Font Size Control
💾 Persist settings using localStorage
📱 Responsive Design
Mobile-first design
Works on all devices (Mobile, Tablet, Desktop)

📦 Installation
1. Clone the Repository
git clone https://github.com/your-username/quran-frontend.git
cd quran-frontend
2. Install Dependencies
npm install
3. Environment Variables

Create a .env.local file in the root:

NEXT_PUBLIC_API_URL=http://localhost:5000
4. Run Development Server
npm run dev

Open:

http://localhost:3000
5. Build for Production
npm run build
npm start

📁 Folder Structure
/components        # Reusable UI components
/pages
  ├── index.js     # Surah List Page
  ├── surah/[id].js # Dynamic Surah Page
/hooks             # Custom React hooks
/utils             # Helper functions
/styles            # Global styles

⚡ Data Fetching (SSG)
getStaticProps → Fetch Surah list
getStaticPaths → Generate dynamic Surah pages
Optimized for performance and SEO
