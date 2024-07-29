
import i18n from 'i18next';
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
    debug: true,
    fallbackLng: "fr",
    interpolation: {
        escapeValue: false,
    },
    resources : {
        en: {
            translation :{
                Lorem: "The Institute of Counseling, Training and Scientific Research INCOFORS",
                accueil : "Home",
                formation: 'Courses',
                contact : 'Contact-Us',
                inscription : "Inscription",
                search: 'Search',
                search_input: 'Search for your course...',
                s2title: 'INCOFORS',
                s2content: "INCOFORS is an institute specializing in research, innovation and improvement of industrial performance, offering advanced technological solutions and consulting services to optimize operations and improve the quality of its clients' products and services.",
                pn:'Why Our courses ?',
                tit4: 'Most Requested courses',
                tout: 'View all',
                course1: 'student',
                course2: 'college student',
                course3: 'professional',
                course4: 'doctorat',
                Presentation: 'presentation',
                galerie: 'gallery',
                photo: "Pictures",
                video: "Video",
            },
        },
        ar: {
            translation: {
                Lorem: 'INCOFORS معهد الاستشارة والتدريب والبحث العلمي',
                accueil: "رئيسي",
                formation: 'دروس',
                contact: "اتصل بنا",
                inscription : "تسجيل",
                search: 'بحث',
                search_input: '...ابحث عن درسك',
                s2title: 'INCOFORS',
                s2content: '.هو معهد متخصص في البحث والابتكار وتحسين الأداء الصناعي، ويقدم حلولًا تكنولوجية متقدمة وخدمات استشارية لتحسين العمليات وتحسين جودة منتجات وخدمات عملائه',
                pn: 'لماذا دروسنا ؟',
                tit4: 'الدروس الأكثر طلبا',
                tout: 'عرض الكل',
                course1: "تلميد",
                course2: "طالب",
                course3: "مهني",
                course4: "دكتور",
                Presentation: 'مقدمة',
                galerie: 'معرض',
                photo: "صور",
                video: "فيديوهات",
            }
        },
        fr: {
            translation:{
                Lorem: "L’Institut De Counseling, De Formation Et De Recherches Scientifiques INCOFORS",
                accueil: "Accueil",
                formation: "Formations",
                contact: "Contact",
                inscription: "Inscrie Ici",
                search: 'Recherche',
                search_input: 'Recherche la formation...',
                s2title: 'INCOFORS',
                s2content:'INCOFORS est un institut spécialisé en recherche, innovation et amélioration des performances industrielles, offrant des solutions technologiques avancées et des services de conseil pour optimiser les opérations et améliorer la qualité des produits et services de ses clients.',
                pn:'porquoi nos formations ?',
                tit4: 'Formations Les Plus Demandés',
                tout: 'voir plus',
                course1: "élève",
                course2: "Ètudient",
                course3: "professionnel",
                course4: "doctorat",
                Presentation: 'presentation',
                galerie: 'galerie',
                photo: "Photo",
                video: "Video",
            }
        }
    }
})
export default i18n;