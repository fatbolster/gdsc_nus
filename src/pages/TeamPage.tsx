import { useState } from "react";
import SiteHeader from "../components/SiteHeader";
import Footer from "../components/Footer";
import { FaLinkedin, FaGithub } from "react-icons/fa6";


type Member = {
  name: string;
  role: string;
  img: string;
  linkedIn?: string;
  github?: string;
};

/* ---------------- EXCO ---------------- */
const excoMembers: Member[] = [
  {
    name: "Sean Sukamto",
    role: "President",
    img: "/team/seansukamto.png",
    linkedIn: "http://linkedin.com/in/sean-sukamto-a866682a2",
    github: "NA",
  },
  {
    name: "Maddy",
    role: "Internal Lead",
    img: "/team/maddy.png",
    linkedIn: "NA",
    github: "NA",
  },
  {
    name: "Prithvi Bhardwaj",
    role: "Internal Lead",
    img: "/team/prithvibhardwaj.png",
    linkedIn: "https://www.linkedin.com/in/prithvi-bhardwaj/",
    github: "https://github.com/prithvibhardwaj",
  },
  {
    name: "Fung En Xi",
    role: "External Lead of Design",
    img: "/team/fungenxi.png",
    linkedIn: "https://www.linkedin.com/in/fungenxi/",
     github: "NA",
  },
  {
    name: "Tan Wen Ling, Ninett",
    role: "External Lead of Product",
    img: "/team/tanwenlingninett.png",
    linkedIn: "NA",
    github: "NA",
  },
  {
    name: "William Jacob Wijaya",
    role: "External Lead of Technology",
    img: "/team/williamjacobwijaya.png",
    linkedIn: "NA",
    github: "NA",
  }
];

/* ----------- INTERNAL TEAMS ----------- */
const internalTeams = {
  "Branding + Marketing": [
    {
        name: "Bernardino Lintang",
        role: "Head of Branding & Marketing",
        img: "/team/bernardinolintang.png",
        linkedIn: "https://www.linkedin.com/in/bernardino-lintang/",
        github: "https://github.com/bernardinolintang",
    },
    {
        name: "Cara Wong",
        role: "Publicity Associate",
        img: "/team/carawong.png",
        linkedIn: "NA",
        github: "NA",
    },
    {
        name: "Manvi Garg",
        role: "Publicity Associate",
        img: "/team/manvigarg.png",
        linkedIn: "NA",
        github: "NA",
    },
    {
      name: "Sean Lee",
      role: "Publicity Associate",
      img: "/team/seanlee.png",
      linkedIn: "NA",
      github: "NA",
    },
    {
      name: "Anton Ang",
      role: "Publicity Associate",
      img: "/team/antonang.png",
      linkedIn: "NA",
      github: "NA",
    },
    {
      name: "Marcus Tse",
      role: "Publicity Associate",
      img: "/team/marcustse.png",
      linkedIn: "https://www.linkedin.com/in/marcus-tse-8a49a2280/",
      github: "NA",
    },
    {
      name: "Heng Theng Wei",
      role: "UI/UX Associate",
      img: "/team/hengthengwei.png",
      linkedIn: "https://www.linkedin.com/in/heng-theng-wei-170191251",
      github: "NA",
    },
    {
      name: "Shaness Toh",
      role: "UI/UX Associate",
      img: "/team/shanesstoh.png",
      linkedIn: "NA",
      github: "NA",
    },
    {
      name: "Swati Rajesh",
      role: "UI/UX Associate",
      img: "/team/swatirajesh.png",
      linkedIn: "https://www.linkedin.com/in/swati-rajesh-817502284/",
      github: "https://github.com/swatirajesh277",
    },
    {
      name: "Jillian Loh",
      role: "UI/UX Associate",
      img: "/team/jillianloh.png",
      linkedIn: "NA",
      github: "NA",
    },
    {
      name: "Lim Yen Hui",
      role: "UI/UX Associate",
      img: "/team/limyenhui.png",
      linkedIn: "https://www.linkedin.com/in/limyenhui/",
      github: "https://github.com/milkksthetic",
    }
  ],
  "Operations + Treasurer": [
    {
      name: "Neal Jhawar",
      role: "Treasurer",
      img: "/team/nealjhawar.png",
      linkedIn: "NA",
      github: "NA",
    },
    {
      name: "Nicole Ngan",
      role: "Head of Operations",
      img: "/team/nicolengan.png",
      linkedIn: "NA",
      github: "NA",
    },
    {
      name: "Rajeshprabu Sidharth",
      role: "Head of Operations",
      img: "/team/sidharth.png",
      linkedIn: "https://www.linkedin.com/in/sidharth-rajeshprabu/",
      github: "https://github.com/TheSputnikSpacecraft",
    },
    {
      name: "Aamuel Chua",
      role: "Operations",
      img: "/team/aamuelchua.png",
      linkedIn: "https://www.linkedin.com/in/aamuelchua",
      github: "https://github.com/aamuelchua",
    },
    {
      name: "Russell Lin",
      role: "Operations",
      img: "/team/russelllin.png",
      linkedIn: "NA",
      github: "NA",
    },
    {
      name: "Karthikeyan Vetrivel",
      role: "Operations",
      img: "/team/vetri.png",
      linkedIn: "https://www.linkedin.com/in/vetrivel-karthikeyan/",
      github: "https://github.com/vet3whale",
    },
    {
      name: "Hau Shuan",
      role: "Operations",
      img: "/team/haushuan.png",
      linkedIn: "NA",
      github: "NA",
    },
    {
      name: "Selina Leung",
      role: "Operations",
      img: "/team/selinaleung.png",
      linkedIn: "https://www.linkedin.com/in/selina-leung/",
      github: "NA",
    },
    {
      name: "Arun Ayyappan Vellaiyan",
      role: "Operations",
      img: "/team/arun.png",
      linkedIn: "www.linkedin.com/in/arun-ayyappan-vellaiyan",
      github: "https://github.com/ArunV2048",
    },
    {
      name: "Sharyl Kwang",
      role: "Operations",
      img: "/team/sharylkwang.png",
      linkedIn: "NA",
      github: "NA",
    },
    {
      name: "Keshia Tan",
      role: "Operations",
      img: "/team/keshiatan.png",
      linkedIn: "NA",
      github: "NA",
    }
  ],
  "Partnerships + Technology": [
    {
      name: "Joseph Goh",
      role: "Head of Partnerships",
      img: "/team/josephgoh.png",
      linkedIn: "NA",
      github: "NA",
    },
    {
      name: "Arnav Kamath",
      role: "Head of Technology",
      img: "/team/arnav.png",
      linkedIn: "linkedin.com/in/arnav-kamath4",
      github: "https://github.com/AK-matrix",
    },
    {
      name: "Nathan Loo",
      role: "Head of Technology",
      img: "/team/nathan.png",
      linkedIn: "https://www.linkedin.com/in/nathanloo/",
      github: "https://github.com/natlv/",
    },
    {
      name: "Kee Zhen Xian",
      role: "Partnerships",
      img: "/team/keezhenxian.png",
      linkedIn: "https://www.linkedin.com/in/keezhenxian/",
      github: "NA",
    },
    {
      name: "Fang Chenyu",
      role: "Partnerships",
      img: "/team/fangchenyu.png",
      linkedIn: "https://www.linkedin.com/in/fang-chenyu/",
      github: "https://github.com",
    },
    {
      name: "Tay Qi Lin",
      role: "Partnerships",
      img: "/team/tayqilin.png",
      linkedIn: "http://linkedin.com/in/qi-lin-tay",
      github: "https://github.com",
    },
    {
      name: "Minseung Sagong",
      role: "Partnerships",
      img: "/team/minseungsagong.png",
      linkedIn: "https://www.linkedin.com/in/minseung-sagong/",
      github: "https://github.com",
    },
    {
      name: "Xiao Wei Ter",
      role: "Partnerships",
      img: "/team/xiaowei.png",
      linkedIn: "https://www.linkedin.com/in/xiao-wei-ter/",
      github: "https://github.com",
    },
    {
      name: "Brian Lee",
      role: "Partnerships",
      img: "/team/brianlee.png",
      linkedIn: "www.linkedin.com/in/brian-lee-bb6b9a31b",
      github: "https://github.com",
    },
    {
      name: "Yong Man Ting",
      role: "Partnerships",
      img: "/team/yongmanting.png",
      linkedIn: "www.linkedin.com/in/manting-yong",
      github: "https://github.com",
    },
    {
      name: "Jessica Chen",
      role: "Partnerships",
      img: "/team/jessicachen.png",
      linkedIn: "NA",
      github: "https://github.com",
    },
    {
      name: "Teoh Yi Wen",
      role: "Partnerships",
      img: "/team/teohyiwen.png",
      linkedIn: "https://www.linkedin.com/in/yiwen-teoh/",
      github: "https://github.com",
    },
    {
      name: "Jhanvi Sahu",
      role: "Partnerships",
      img: "/team/jhanvisahu.png",
      linkedIn: "NA",
      github: "https://github.com",
    },
    {
      name: "Kataru Rohita Reddy",
      role: "Partnerships",
      img: "/team/rohitakataru.png",
      linkedIn: "https://www.linkedin.com/in/rohita-reddy-990915294",
      github: "https://github.com",
    },
    {
      name: "Emerson Chua",
      role: "Technology",
      img: "/team/emersonchua.png",
      linkedIn: "https://www.linkedin.com/in/emerson-chua-kai-jie",
      github: "https://github.com/fatbolster",
    },
    {
      name: "Glen Tan",
      role: "Technology",
      img: "/team/glen.png",
      linkedIn: "www.linkedin.com/in/glen-tls",
      github: "NA",
    },
    {
      name: "Samuel Tan",
      role: "Technology",
      img: "/team/samuel.png",
      linkedIn: "www.linkedin.com/in/samuel-tan-wei-jie",
      github: "https://github.com/samueltann",
    },
    {
      name: "See Kai Teng",
      role: "Technology",
      img: "/team/kaiteng.png",
      linkedIn: "www.linkedin.com/in/kai-teng-see-a5786b2a5",
      github: "https://github.com/KaiTeng03",
    },
    {
      name: "Tay Hui En",
      role: "Technology",
      img: "/team/huien.png",
      linkedIn: "https://linkedin.com/in/hui-en-tay/",
      github: "https://github.com/moopiggus",
    },
    {
      name: "Kim Yungju",
      role: "Technology",
      img: "/team/yungju.png",
      linkedIn: "https://www.linkedin.com/in/yungju",
      github: "NA",
    },
    {
      name: "Glory Lion",
      role: "Technology",
      img: "/team/glorylion.png",
      linkedIn: "https://www.linkedin.com/in/glory-charity-lion-68755037a/",
      github: "https://github.com/glory-lion",
    },
    {
      name: "Gao Zilin",
      role: "Technology",
      img: "/team/zilin.png",
      linkedIn: "https://linkedin.com/in/zilin-gao",
      github: "https://github.com/gaozilin2005",
    },
    {
      name: "Manish",
      role: "Technology",
      img: "/team/manish.png",
      linkedIn: "NA",
      github: "https://github.com",
    },
    {
      name: "Kai Kiat",
      role: "Technology",
      img: "/team/kaikiat.png",
      linkedIn: "NA",
      github: "https://github.com",
    },
    {
      name: "Arnav Jhajharia",
      role: "Technology",
      img: "/team/arnavjhajharia.png",
      linkedIn: "NA",
      github: "https://github.com",
    }
  ],
} as const;
type InternalTeamKey = keyof typeof internalTeams;

/* ----------- EXTERNAL TEAMS ----------- */
const externalTeams = {
  "Caring for Life": [
    {
      name: "Tarin",
      role: "Head of Technology",
      img: "/team/tarin.png",
      linkedIn: "NA",
      github: "https://github.com",
    },
    {
      name: "Charly Chandra",
      role: "Head of Product",
      img: "/team/charly.png",
      linkedIn: "https://www.linkedin.com/in/charly-chandra/",
      github: "https://github.com/Charly2312",
    },
    {
      name: "Niik Seah",
      role: "Head of Design",
      img: "/team/niikseah.png",
      linkedIn: "www.linkedin.com/in/niikseah",
      github: "https://github.com",
    },
    {
      name: "Ryan Ng",
      role: "Product Associate",
      img: "/team/ryan.png",
      linkedIn: "www.linkedin.com/in/ryan-ng-jek-hian",
      github: "https://github.com",
    },
    {
      name: "Joyce",
      role: "Product Associate",
      img: "/team/joyce.png",
      linkedIn: "NA",
      github: "https://github.com",
    },
    {
      name: "Samuel",
      role: "Product Associate",
      img: "/team/samuel(caringforlife).png",
      linkedIn: "NA",
      github: "https://github.com",
    },
    {
      name: "Valerie Lim",
      role: "Product Associate",
      img: "/team/valerie.png",
      linkedIn: "http://linkedin.com/in/valerie-lim-395aa3211",
      github: "https://github.com",
    },
    {
      name: "Nikhil",
      role: "Technology Associate",
      img: "/team/nikhil.png",
      linkedIn: "NA",
      github: "https://github.com",
    },
    {
      name: "Glenn Chiang",
      role: "Technology Associate",
      img: "/team/glenn.png",
      linkedIn: "https://www.linkedin.com/in/glenn-chiang-10a027262/",
      github: "https://github.com",
    },
    {
      name: "Hao Jun",
      role: "Technology Associate",
      img: "/team/haojun.png",
      linkedIn: "NA",
      github: "https://github.com",
    },
    {
      name: "Vincent Gavriel Julijanto",
      role: "Technology Associate",
      img: "/team/vincent.png",
      linkedIn: "linkedin.com/in/vincentjulijanto",
      github: "github.com/VincentJulijanto",
    },
    {
      name: "Hong Ming",
      role: "Technology Associate",
      img: "/team/hongming.png",
      linkedIn: "NA",
      github: "https://github.com",
    },
    {
      name: "Kuah Gene Qhee",
      role: "Technology Associate",
      img: "/team/gene.png",
      linkedIn: "https://www.linkedin.com/in/kuahgeneqhee",
      github: "https://github.com/geengene",
    },
    {
      name: "Choon Wei Law",
      role: "Technology Associate",
      img: "/team/choonwei.png",
      linkedIn: "https://www.linkedin.com/in/lcw020104/",
      github: "https://github.com/choonwei0214",
    },
    {
      name: "Ashlyn",
      role: "UI/UX Associate",
      img: "/team/ashlyn.png",
      linkedIn: "https://www.linkedin.com/in/ashlyn-lim",
      github: "https://github.com/akeshiiv",
    },
    {
      name: "Cheryl Leong Hui Yi",
      role: "UI/UX Associate",
      img: "/team/cheryl.png",
      linkedIn: "https://www.linkedin.com/in/cheryl-leong-423197332/",
      github: "https://github.com",
    },
    {
      name: "Hui Yi",
      role: "UI/UX Associate",
      img: "/team/huiyi.png",
      linkedIn: "NA",
      github: "https://github.com",
    },
    {
      name: "Audrie",
      role: "UI/UX Associate",
      img: "/team/audrie.png",
      linkedIn: "NA",
      github: "https://github.com",
    }
  ],
  "Action for Singapore Dogs (ASD)": [
    {
      name: "Yu Xun",
      role: "Head of Technology",
      img: "/team/yuxun.png",
      linkedIn: "NA",
      github: "https://github.com",
    },
    {
      name: "Brendan",
      role: "Head of Product",
      img: "/team/brendan.png",
      linkedIn: "NA",
      github: "https://github.com",
    },
    {
      name: "Akira",
      role: "Head of Design",
      img: "/team/akira.png",
      linkedIn: "NA",
      github: "https://github.com",
    },
    {
      name: "Wei Yan",
      role: "Product Associate",
      img: "/team/weiyan.png",
      linkedIn: "NA",
      github: "https://github.com",
    },
    {
      name: "Josalyn",
      role: "Product Associate",
      img: "/team/josalyn.png",
      linkedIn: "NA",
      github: "https://github.com",
    },
    {
      name: "Leticia",
      role: "Product Associate",
      img: "/team/leticia.png",
      linkedIn: "NA",
      github: "https://github.com",
    },
    {
      name: "Alloy",
      role: "Product Associate",
      img: "/team/alloy.png",
      linkedIn: "NA",
      github: "https://github.com",
    },
    {
      name: "Kelly Tan",
      role: "Technology Associate",
      img: "/team/kelly.png",
      linkedIn: "https://www.linkedin.com/in/marcus-tse-8a49a2280/",
      github: "https://github.com/kellytxn",
    },
    {
      name: "Austin",
      role: "Technology Associate",
      img: "/team/austin.png",
      linkedIn: "NA",
      github: "https://github.com",
    },
    {
      name: "Chew Zing Jen",
      role: "Technology Associate",
      img: "/team/zing.png",
      linkedIn: "linkedin.com/in/chewzingjen",
      github: "https://github.com/zeeeing",
    },
    {
      name: "Zheng Yang",
      role: "Technology Associate",
      img: "/team/zhengyang.png",
      linkedIn: "NA",
      github: "https://github.com",
    },
    {
      name: "En Xuan",
      role: "UI/UX Associate",
      img: "/team/enxuan.png",
      linkedIn: "NA",
      github: "https://github.com",
    },
    {
      name: "Natalie",
      role: "UI/UX Associate",
      img: "/team/natalie.png",
      linkedIn: "NA",
      github: "https://github.com",
    },
    {
      name: "Gan Ting En",
      role: "UI/UX Associate",
      img: "/team/tingen.png",
      linkedIn: "NA",
      github: "https://github.com",
    },
    {
      name: "Preethy",
      role: "UI/UX Associate",
      img: "/team/preethy.png",
      linkedIn: "NA",
      github: "https://github.com",
    }
  ],
  ItsRainingRaincoats: [
    {
      name: "Nicholas",
      role: "Head of Technology",
      img: "/team/nicholas.png",
      linkedIn: "NA",
      github: "https://github.com",
    },
    {
      name: "Rakshana",
      role: "Head of Product",
      img: "/team/rakshana.png",
      linkedIn: "linkedin.com/in/rrakshana",
      github: "https://github.com",
    },
    {
      name: "Delia",
      role: "Head of Design",
      img: "/team/delia.png",
      linkedIn: "NA",
      github: "https://github.com",
    },
    {
      name: "Wilson Soon",
      role: "Product Associate",
      img: "/team/wilson.png",
      linkedIn: "https://www.linkedin.com/in/wilsonsfh/",
      github: "https://github.com/wilsonsfh",
    },
    {
      name: "Dongyyun",
      role: "Product Associate",
      img: "/team/dongyyun.png",
      linkedIn: "NA",
      github: "https://github.com",
    },
    {
      name: "Talia",
      role: "Product Associate",
      img: "/team/talia.png",
      linkedIn: "NA",
      github: "https://github.com",
    },
    {
      name: "Rachel Tan",
      role: "Product Associate",
      img: "/team/rachel.png",
      linkedIn: "https://www.linkedin.com/in/rachel-tjw",
      github: "NA",
    },
    {
      name: "Soong Shao Zhi",
      role: "Technology Associate",
      img: "/team/soongshaozhi.png",
      linkedIn: "https://www.linkedin.com/in/soongshaozhi/",
      github: "https://github.com",
    },
    {
      name: "Manish",
      role: "Technology Associate",
      img: "/team/manish(itsrainingraincoats).png",
      linkedIn: "NA",
      github: "https://github.com",
    },
    {
      name: "Lucas",
      role: "Technology Associate",
      img: "/team/lucas.png",
      linkedIn: "NA",
      github: "https://github.com",
    },
    {
      name: "Adrian",
      role: "Technology Associate",
      img: "/team/adrian.png",
      linkedIn: "NA",
      github: "https://github.com",
    },
    {
      name: "Zeng Fu",
      role: "Technology Associate",
      img: "/team/zengfu.png",
      linkedIn: "NA",
      github: "https://github.com",
    },
    {
      name: "Gabriel Tang",
      role: "Technology Associate",
      img: "/team/gabriel.png",
      linkedIn: "https://www.linkedin.com/in/gabriel-tang-203389268/",
      github: "https://github.com/gabrieltang515",
    },
    {
      name: "Bryan Wong",
      role: "Technology Associate",
      img: "/team/bryan.png",
      linkedIn: "https://linkedin.com/in/zw-wong",
      github: "https://github.com/kiritowu",
    },
    {
      name: "Zheng Yang",
      role: "Technology Associate",
      img: "/team/zhengyang(itsrainingraincoats).png",
      linkedIn: "NA",
      github: "https://github.com",
    },
    {
      name: "Prasanna Thiruvickram",
      role: "UI/UX Associate",
      img: "/team/vikram.png",
      linkedIn: "linkedin.com/in/thiruvickramprasanna/",
      github: "https://github.com",
    },
    {
      name: "Chloe Wang",
      role: "UI/UX Associate",
      img: "/team/chloe.png",
      linkedIn: "www.linkedin.com/in/chloe-wang-86339a25b",
      github: "https://github.com",
    },
    {
      name: "Gracia Chew",
      role: "UI/UX Associate",
      img: "/team/gracia.png",
      linkedIn: "www.linkedin.com/in/gracia-chew",
      github: "https://github.com",
    },
    {
      name: "Kay Woon",
      role: "UI/UX Associate",
      img: "/team/kaywoon.png",
      linkedIn: "NA",
      github: "https://github.com",
    }
  ],
  SiloamXperience: [
    {
      name: "Lavanya",
      role: "Head of Technology",
      img: "/team/lavanya.png",
      linkedIn: "https://www.linkedin.com/in/lavanyagarg/",
      github: "https://github.com/lavanyagarg112",
    },
    {
      name: "Mehul",
      role: "Head of Product",
      img: "/team/mehul.png",
      linkedIn: "NA",
      github: "https://github.com",
    },
    {
      name: "Clare",
      role: "Head of Design",
      img: "/team/clare.png",
      linkedIn: "NA",
      github: "https://github.com",
    },
    {
      name: "Samantha Andal",
      role: "Product Associate",
      img: "/team/samantha.png",
      linkedIn: "https://www.linkedin.com/in/samantha-andal-5544ba246/",
      github: "https://github.com",
    },
    {
      name: "Teo Yi Ting",
      role: "Product Associate",
      img: "/team/yiting.png",
      linkedIn: "www.linkedin.com/in/yitingteo",
      github: "https://github.com",
    },
    {
      name: "Luvay",
      role: "Product Associate",
      img: "/team/luvay.png",
      linkedIn: "NA",
      github: "https://github.com",
    },
    {
      name: "Cho",
      role: "Product Associate",
      img: "/team/cho.png",
      linkedIn: "NA",
      github: "https://github.com",
    },
    {
      name: "Jun Wei Foo",
      role: "Frontend Lead",
      img: "/team/junwei.png",
      linkedIn: "https://www.linkedin.com/in/foo-jun-wei",
      github: "https://github.com/junwei07",
    },
    {
      name: "Lucius",
      role: "Backend Lead",
      img: "/team/lucius.png",
      linkedIn: "NA",
      github: "https://github.com",
    },
    {
      name: "Xiangrui",
      role: "Technology Associate",
      img: "/team/xiangrui.png",
      linkedIn: "NA",
      github: "https://github.com",
    },
    {
      name: "Tasmiyah",
      role: "Technology Associate",
      img: "/team/tasmiyah.png",
      linkedIn: "NA",
      github: "https://github.com",
    },
    {
      name: "Clement Aditya Chendra",
      role: "Technology Associate",
      img: "/team/clement.png",
      linkedIn: "https://www.linkedin.com/in/clementchendra",
      github: "https://github.com/Cleaach",
    },
    {
      name: "Aloysius Pek",
      role: "Technology Associate",
      img: "/team/aloysius.png",
      linkedIn: "www.linkedin.com/in/aloysiuspek",
      github: "https://github.com/aloy-pek",
    },
    {
      name: "Kai",
      role: "Technology Associate",
      img: "/team/kai.png",
      linkedIn: "NA",
      github: "https://github.com",
    },
    {
      name: "Tan Chien Yi",
      role: "UI/UX Associate",
      img: "/team/chienyi.png",
      linkedIn: "http://linkedin.com/in/tanchienyi",
      github: "https://github.com/cchienyii",
    },
    {
      name: "Nidia",
      role: "UI/UX Associate",
      img: "/team/nidia.png",
      linkedIn: "NA",
      github: "https://github.com",
    },
    {
      name: "Lee Jie Shi",
      role: "UI/UX Associate",
      img: "/team/jieshi.png",
      linkedIn: "www.linkedin.com/in/jie-shi-lee",
      github: "https://github.com",
    },
    {
      name: "Ong Xiang Ting",
      role: "UI/UX Associate",
      img: "/team/xiangting.png",
      linkedIn: "www.linkedin.com/in/ong-xiang-ting-",
      github: "https://github.com",
    }
  ],
  "The Volunteer Switchboard": [
    {
      name: "Shaoqin",
      role: "Head of Technology",
      img: "/team/shaoqin.png",
      linkedIn: "NA",
      github: "https://github.com",
    },
    {
      name: "Gabrielle",
      role: "Head of Product",
      img: "/team/gabrielle.png",
      linkedIn: "NA",
      github: "https://github.com",
    },
    {
      name: "Priskila",
      role: "Head of Design",
      img: "/team/priskila.png",
      linkedIn: "NA",
      github: "https://github.com",
    },
    {
      name: "Vera",
      role: "Product Associate",
      img: "/team/vera.png",
      linkedIn: "NA",
      github: "https://github.com",
    },
    {
      name: "Haridos Sreelakshmi",
      role: "Product Associate",
      img: "/team/sreelakshmi.png",
      linkedIn: "www.linkedin.com/in/sreelakshmiharidos",
      github: "https://github.com",
    },
    {
      name: "Chew Qiao Enn",
      role: "Product Associate",
      img: "/team/qiaoenn.png",
      linkedIn: "www.linkedin.com/in/qiao-enn-chew26",
      github: "https://github.com",
    },
    {
      name: "Mao Kuang-Hsin",
      role: "Product Associate",
      img: "/team/kuanghsin.png",
      linkedIn: "http://linkedin.com/in/cindymao109",
      github: "https://github.com/MaoKuangHsin",
    },
    {
      name: "Raphael Yeo",
      role: "Technology Associate",
      img: "/team/raphael.png",
      linkedIn: "https://www.linkedin.com/in/raphael-yeo-tong-seng",
      github: "https://www.github.com/LittleLittleLittleR",
    },
    {
      name: "Evan",
      role: "Technology Associate",
      img: "/team/evan.png",
      linkedIn: "NA",
      github: "https://github.com",
    },
    {
      name: "Srivathsan Ram",
      role: "Technology Associate",
      img: "/team/srivathsan.png",
      linkedIn: "https://www.linkedin.com/in/srivathsan-ram-9a0b9b25b/",
      github: "https://github.com/SrivathsanRam",
    },
    {
      name: "Wang Yujie",
      role: "Technology Associate",
      img: "/team/yujie.png",
      linkedIn: "www.linkedin.com/in/wang-yujie",
      github: "https://github.com/raedeon",
    },
    {
      name: "Nicole",
      role: "UI/UX Associate",
      img: "/team/nicole.png",
      linkedIn: "NA",
      github: "https://github.com",
    },
    {
      name: "Shermaine",
      role: "UI/UX Associate",
      img: "/team/shermaine.png",
      linkedIn: "NA",
      github: "https://github.com",
    },
    {
      name: "Jocelyn",
      role: "UI/UX Associate",
      img: "/team/jocelyn.png",
      linkedIn: "NA",
      github: "https://github.com",
    },
    {
      name: "Rui-En",
      role: "UI/UX Associate",
      img: "/team/ruien.png",
      linkedIn: "NA",
      github: "https://github.com",
    }
  ],
} as const;
type ExternalTeamKey = keyof typeof externalTeams;

/* ========================= PAGE ========================= */
export default function TeamPage() {
  const [activeTeam, setActiveTeam] = useState<"internal" | "external">("internal");
  const [activeInternal, setActiveInternal] =
    useState<InternalTeamKey>("Branding + Marketing");
  const [activeExternal, setActiveExternal] =
    useState<ExternalTeamKey>("Caring for Life");

  const subteamKeys =
    activeTeam === "internal"
      ? (Object.keys(internalTeams) as InternalTeamKey[])
      : (Object.keys(externalTeams) as ExternalTeamKey[]);

  const activeGroupName = activeTeam === "internal" ? activeInternal : activeExternal;

  const activeMembers: Member[] =
    activeTeam === "internal"
      ? [...internalTeams[activeInternal]]
      : [...externalTeams[activeExternal]];

  return (
    <div className="min-h-dvh bg-white text-slate-900 selection:bg-indigo-500/40">
      <SiteHeader />

      <main className="mx-auto max-w-6xl px-4 py-16">
        <h1 className="text-center text-4xl font-bold mb-12">Meet The Team</h1>

        {/* EXCO */}
        <section className="rounded-2xl bg-slate-100 p-8 border border-slate-200 shadow-sm">
          <h2 className="text-2xl font-semibold text-center text-green-600">EXCO</h2>
          <p className="mt-2 text-center text-sm text-slate-600">
            The group that forms the backbone and oversees all projects and events.
          </p>

          {/* Scrollable EXCO */}
          <div className="mt-8 overflow-x-auto whitespace-nowrap pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <div className="flex gap-6 justify-start min-w-max px-2">
              {excoMembers.map((person, i) => (
                <div key={`exco-${person.name}-${i}`} className="shrink-0 w-40">
                  <MemberCard {...person} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Internal / External Toggle */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center items-stretch gap-4 sm:gap-10">
          <button
            type="button"
            className={`w-full sm:w-96 py-2.5 rounded-md border text-base font-semibold transition-all duration-200 ${
              activeTeam === "internal"
                ? "bg-[#6A8DFF] border-[#6A8DFF] text-white"
                : "bg-white border-slate-300 text-slate-700 hover:bg-slate-100"
            }`}
            onClick={() => setActiveTeam("internal")}
          >
            Internal Team
          </button>

          <button
            type="button"
            className={`w-full sm:w-96 py-2.5 rounded-md border text-base font-semibold transition-all duration-200 ${
              activeTeam === "external"
                ? "bg-[#6A8DFF] border-[#6A8DFF] text-white"
                : "bg-white border-slate-300 text-slate-700 hover:bg-slate-100"
            }`}
            onClick={() => setActiveTeam("external")}
          >
            External Team
          </button>
        </div>



        {/* Dynamic Section */}
        <section className="mt-12 rounded-2xl bg-slate-100 p-8 border border-slate-200 shadow-sm">
          <div className="flex flex-wrap justify-center gap-3 mb-4 text-sm">
            {subteamKeys.map((name) => (
              <button
                key={name}
                onClick={() =>
                  activeTeam === "internal"
                    ? setActiveInternal(name as InternalTeamKey)
                    : setActiveExternal(name as ExternalTeamKey)
                }
                className={`px-4 py-1 rounded-full transition ${
                  name === activeGroupName
                    ? "bg-blue-200 text-black shadow-sm"
                    : "bg-slate-200 text-slate-700 hover:bg-slate-300"
                }`}
              >
                {name}
              </button>
            ))}
          </div>

          <p className="text-center text-sm text-slate-600 mb-6">
            {activeTeam === "internal"
              ? `Currently viewing ${activeInternal}.`
              : `Currently viewing ${activeExternal}.`}
          </p>

          <div className="overflow-x-auto whitespace-nowrap py-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <div className="flex gap-6 min-w-max">
              {activeMembers.map((person, idx) => (
                <div
                  key={`${activeTeam}-${activeGroupName}-${person.name}-${idx}`}
                  className="shrink-0 w-40"
                >
                  <MemberCard {...person} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

/* ====================== CARD ====================== */
function MemberCard({ name, role, img, linkedIn, github }: Member) {
  return (
    <div className="flex flex-col items-center rounded-xl bg-slate-50 p-4 border border-slate-200 shadow hover:shadow-md transition">
      <img
        src={img}
        alt={name}
        className="h-24 w-24 rounded-full object-cover border border-slate-300"
      />
      <h3 className="mt-3 font-medium text-slate-900">{name}</h3>
      <p className="text-xs text-slate-600">{role}</p>

      <div className="flex gap-4 mt-3 text-lg text-slate-400">
        <a
          href={linkedIn ?? "https://linkedin.com"}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-600 transition"
          aria-label={`${name} LinkedIn`}
          title="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href={github ?? "https://github.com"}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-black transition"
          aria-label={`${name} GitHub`}
          title="GitHub"
        >
          <FaGithub />
        </a>
        </div>
    </div>
  );
}
