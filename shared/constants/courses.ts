import { CourseType } from "../types/CourseType";

export const coursesData: CourseType[] = [
  {
    id: "1",
    title: "HR Təlimi",
    description:
      "İnsan resuslarının idarə edilməsi haqqında təşkil etdiyimiz tədris təlimidir...",
    detailDescription:
      "İnsan resuslarının idarə edilməsi haqqında təşkil etdiyimiz tədris təlimidir.İnsan resusları üzrə təlimlər peşəkar təlimçilər tərəfindən əhatəli təlim planı əsasında tədris olunur. HR təlimlərinin sonunda iştirakçılar sertifikatla təmin edilir və tələbələrin iş imkanlarını artırmaq məqsədi ilə  müvafiq iş yerlərinə tövsiyə edilir.",
    icon: "/images/HR təlimi.svg",
    targetAudience: [
      "İnsan Resursları sahəsində yeni başlayanlar",
      "İnsan Resursları sahəsi üzrə karyera qurmaq istəyən şəxslər",
      "Artıq bu sahədə çalışan özünü təkmilləşdirmək istəyən şəxslər",
      "Bu sahədə özünü inkişaf etdirmək istəyən digər şəxslər",
    ],
    programDuration: "2 aylıq təlim proqramı + 1 ay təcrübə imkanı",
    curriculum: [
      "İnsan Resurslarının İdarə edilməsi nədir?",
      "Əmək Məcəlləsi və İnsan Resursları əməliyyatları",
      "Performansın İdarə Edilməsi",
      "Əməyin ödənilməsi",
      "Qadın əmək hüquqları. Yaşı 18-dən az olan işçilərin əməyindən istifadənin xüsusiyyətləri",
    ],
    features: [
      "Özünü analiz tapşırıqları və testlər",
      "Keys tapşırıqlar",
      "Komanda oyunları",
      "İndividual, Qrup işləri",
      "Networking imkanı",
    ],
    participants: 10,
  },
  {
    id: "2",
    title: "Satış və idarəetmə təlimi",
    description: "Yüksək səviyyəli satış menecerləri təlimi...",
    detailDescription:
      "Yüksək səviyyəli satış menecerləri təlimi satış üzrə menecer olan və ya olmaq istəyən şəxslərin menecer kimi başqalarından fərqini ortaya qoymaq, boşluqlarını müəyyənləşdirmək, strateji quruculuq prosesinin mərhələləri ilə praktiki olaraq tanış olmağa fürsət yaradan 16 saatlıq təlim proqramıdır.",
    icon: "/images/Satış təlimi.svg",
    targetAudience: [
      "Satış sahəsində yeni başlayanlar",
      "Karyera qurmaq istəyənlər",
    ],
    programDuration: "1 aylıq təlim",
    curriculum: [
      "Satışın əsasları",
      "Müştəri ilə ünsiyyət",
      "Satış strategiyaları",
    ],
    features: ["Praktik tapşırıqlar", "Real-case studies", "Komanda oyunları"],
    participants: 5,
  },

  {
    id: "3",
    title: "Backend Proqramlaşdırma",
    description:
      "İnformasiya Texnologiyaları (İT) günümüzdə ən sürətlə inkişaf edən və yüksək maaşlı iş imkanları təqdim edən sahələrdən biridir...",
    detailDescription:
      "Backend inkişafı proqramçıların məlumat bazaları ilə işləməsini, serverləri idarə etməsini və istifadəçilərdən gələn sorğuları düzgün cavablandırmasını təmin edir. Bu təlim, backend proqramlaşdırma sahəsində bacarıqları inkişaf etdirmək istəyənlərə müxtəlif alətləri necə istifadə etməyi öyrədir.",
    icon: "/images/Back-end təlimi.svg",
    targetAudience: [
      "Yeni Başlayanlar – Proqramlaşdırmaya yeni başlayanlar üçün backend yaxşı bir seçimdir, çünki məntiqi düşünmə və sistem qurma bacarıqlarını inkişaf etdirir.",
      "Məlumat bazası (Database) idarə edənlər – SQL, NoSQL kimi verilənlər bazalarını idarə etməyi öyrənənlər üçün.",
      "Bulud texnologiyalarında işləyənlər – AWS, Google Cloud, Azure kimi bulud sistemləri ilə işləyənlər üçün vacibdir.",
    ],
    programDuration: "6 aylıq təlim",
    curriculum: [
      "Introduction to Programming & .NET",
      "C# Fundamentals & Advanced Concepts",
      "ASP.NET Core (API & MVC)",
      "SQL Server, Entity Framework",
      "Web Technologies",
    ],
    features: [
      "Praktik tapşırıqlar",
      "Real-case studies",
      "Komanda oyunları",
      "Networking imkanı",
    ],
    participants: 12,
  },
  {
    id: "4",
    title: "Turizm və Otelçilik Təlimi",
    description:
      "Bu təlim 2 aylıq intensiv bir proqram olaraq təşkil olunub...",
    detailDescription:
      "Bu təlim 2 aylıq intensiv bir proqram olaraq təşkil olunub. Həftədə 2 dəfə keçirilən dərslər, iştirakçıların turizm və otelçilik sahəsində hərtərəfli biliklər əldə etmələrini təmin edir. Dərslər nəzəri və praktiki hissələrdən ibarət olub, təlim müddətində iştirakçılar real iş mühitində tətbiq olunan metod və prinsiplərlə tanış olacaqlar. Təlimin məqsədi, iştirakçılara turizm və otelçilik sahəsində yüksək keyfiyyətli xidmət göstərmək və beş ulduzlu otellərdə işləyən peşəkarlar kimi fəaliyyət göstərmək üçün lazım olan bütün nəzəri və praktiki bilikləri qazandırmaqdır.",
    icon: "/images/Turizm təlimi.svg",
    targetAudience: [
      "Turizm və otelçilik sahəsində karyera qurmaq istəyənlər",
      "Bu sahədə özünü inkişaf etdirmək istəyənlər",
      "Beş ulduzlu otellərdə işləmək istəyənlər",
    ],
    programDuration: "2 aylıq təlim",
    curriculum: [
      "Qonaqların qəbulu və qeydiyyatı",
      "Otaq yerləşdirmə və bellboy xidməti",
      "Müştərilərlə ünsiyyət və etiket qaydaları",
      "Otaq və xidmət keyfiyyətinin idarə olunması",
      "5 ulduzlu mehmanxana işçisi necə olmalıdır?",
      "Turizm biznesinin idarə edilməsi",
      "Qonaqpərvərlik və müştəri xidmətləri",
    ],
    features: [
      "Praktik tapşırıqlar",
      "Real-case studies",
      "Komanda oyunları",
      "Networking imkanı",
    ],
    participants: 8,
  },
  {
    id: "6",
    title: "Frontend Proqramlaşdırma",
    description:
      "Web Development günümüzdə ən sürətlə inkişaf edən və yüksək maaşlı iş imkanları təqdim edən sahələrdən biridir...",
    detailDescription: "Bu sahədə proqramçılar, saytın dizaynını, interaktiv elementlərini və istifadəçi təcrübəsini yaxşılaşdıran hissələri qururlar. Frontend inkişafı, veb səhifənin necə göründüyünü və istifadəçilərlə necə əlaqə qurduğunu müəyyən edir. Bu təlim, frontend proqramlaşdırma bacarıqlarını artırmaq istəyənlərə müxtəlif alətləri və texnologiyaları necə istifadə etməyi öyrədir.",
    icon: "/images/Front-end təlimi.svg",
    targetAudience: [
      "Web development öyrənmək istəyənlər",
      "Frontend development sahəsində karyera qurmaq istəyənlər",
      "HTML, CSS, JavaScript və React öyrənmək istəyənlər",
    ],
    programDuration: "4 aylıq təlim",
    curriculum: [
      "HTML və CSS əsasları",
      "JavaScript Fundamental və Ətraflı Konsepsiyalar",
      "React ilə Tətbiq İnkişafı",
      "Frontend Alətləri və Texnologiyaları",
      "Layihə İdarəetməsi və Git",
    ],
    features: [
      "Praktiki yanaşma",
      "Diplom",
      "Peşəkar təlimçilər ",
      "Networking imkanı",
    ],
    participants: 6,
  },
];
