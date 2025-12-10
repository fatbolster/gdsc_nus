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
    name: "Sean Sukamoto",
    role: "President",
    img: "/team/seansukamto.png",
    linkedIn: "https://linkedin.com",
    github: "https://github.com",
  },
  {
    name: "Maddy",
    role: "Internal Lead",
    img: "/team/maddy.png",
    linkedIn: "https://linkedin.com",
    github: "https://github.com",
  },
  {
    name: "Prithvi Bhardwaj",
    role: "Internal Lead",
    img: "/team/prithvibhardwaj.png",
    linkedIn: "https://linkedin.com",
    github: "https://github.com",
  },
  {
      name: "Fung En Xi",
      role: "External Lead of Design",
      img: "/team/fungenxi.png",
      linkedIn: "https://linkedin.com",
      github: "https://github.com",
  },
  {
        name: "Tan Wen Ling, Ninett",
        role: "External Lead of Product",
        img: "/team/tanwenlingninett.png",
        linkedIn: "https://linkedin.com",
        github: "https://github.com",
  },
  {
          name: "William Jacob Wijaya",
          role: "External Lead of Technology",
          img: "/team/williamjacobwijaya.png",
          linkedIn: "https://linkedin.com",
          github: "https://github.com",
  }
];

/* ----------- INTERNAL TEAMS ----------- */
const internalTeams = {
  "Branding + Marketing": [
    {
        name: "Bernardino Lintang",
        role: "Head of Branding & Marketing",
        img: "/team/bernardinolintang.png",
        linkedIn: "https://linkedin.com",
        github: "https://github.com",
    },
    {
        name: "Cara Wong",
        role: "Publicity Associate",
        img: "/team/carawong.png",
        linkedIn: "https://linkedin.com",
        github: "https://github.com",
    },
    {
        name: "Manvi Garg",
        role: "Publicity Associate",
        img: "/team/manvigarg.png",
        linkedIn: "https://linkedin.com",
        github: "https://github.com",
    },
    {
      name: "Sean Lee",
      role: "Publicity Associate",
      img: "/team/seanlee.png",
      linkedIn: "https://linkedin.com",
      github: "https://github.com",
    },
    {
      name: "Anton Ang",
      role: "Publicity Associate",
      img: "/team/antonang.png",
      linkedIn: "https://linkedin.com",
      github: "https://github.com",
    },
    {
      name: "Marcus Tse",
      role: "Publicity Associate",
      img: "/team/marcustse.png",
      linkedIn: "https://linkedin.com",
      github: "https://github.com",
    },
    {
      name: "Heng Theng Wei",
      role: "UI/UX Associate",
      img: "/team/hengthengwei.png",
      linkedIn: "https://linkedin.com",
      github: "https://github.com",
    },
    {
      name: "Shaness Toh",
      role: "UI/UX Associate",
      img: "/team/shanesstoh.png",
      linkedIn: "https://linkedin.com",
      github: "https://github.com",
    },
    {
      name: "Swati Rajesh",
      role: "UI/UX Associate",
      img: "/team/swatirajesh.png",
      linkedIn: "https://linkedin.com",
      github: "https://github.com",
    },
    {
      name: "Jillian Loh",
      role: "UI/UX Associate",
      img: "/team/jillianloh.png",
      linkedIn: "https://linkedin.com",
      github: "https://github.com",
    },
    {
      name: "Lim Yen Hui",
      role: "UI/UX Associate",
      img: "/team/limyenhui.png",
      linkedIn: "https://linkedin.com",
      github: "https://github.com",
    }
  ],
  "Operations + Treasurer": [
    {
      name: "Neal Jhawar",
      role: "Treasurer",
      img: "/team/nealjhawar.png",
      linkedIn: "https://linkedin.com",
      github: "https://github.com",
    },
    {
      name: "Nicole Ngan",
      role: "Head of Operations",
      img: "/team/nicolengan.png",
      linkedIn: "https://linkedin.com",
      github: "https://github.com",
    },
    {
      name: "Aamuel Chua",
      role: "Operations",
      img: "/team/aamuelchua.png",
      linkedIn: "https://linkedin.com",
      github: "https://github.com",
    },
    {
      name: "Russell Lin",
      role: "Operations",
      img: "/team/russelllin.png",
      linkedIn: "https://linkedin.com",
      github: "https://github.com",
    },
    {
      name: "Vetri",
      role: "Operations",
      img: "/team/vetri.png",
      linkedIn: "https://linkedin.com",
      github: "https://github.com",
    },
    {
      name: "Hau Shuan",
      role: "Operations",
      img: "/team/haushuan.png",
      linkedIn: "https://linkedin.com",
      github: "https://github.com",
    },
    {
      name: "Sidharth",
      role: "Head of Operations",
      img: "/team/sidharth.png",
      linkedIn: "https://linkedin.com",
      github: "https://github.com",
    },
    {
      name: "Selina Leung",
      role: "Operations",
      img: "/team/selinaleung.png",
      linkedIn: "https://linkedin.com",
      github: "https://github.com",
    },
    {
      name: "Arun",
      role: "Operations",
      img: "/team/arun.png",
      linkedIn: "https://linkedin.com",
      github: "https://github.com",
    },
    {
      name: "Sharyl Kwang",
      role: "Operations",
      img: "/team/sharylkwang.png",
      linkedIn: "https://linkedin.com",
      github: "https://github.com",
    },
    {
      name: "Keshia Tan",
      role: "Operations",
      img: "/team/keshiatan.png",
      linkedIn: "https://linkedin.com",
      github: "https://github.com",
    }
  ],
  "Partnerships + Technology": [
    {
      name: "Joseph Goh",
      role: "Head of Partnerships",
      img: "/team/josephgoh.png",
      linkedIn: "https://linkedin.com",
      github: "https://github.com",
    },
    {
      name: "Kee Zhen Xian",
      role: "Partnerships",
      img: "/team/keezhenxian.png",
      linkedIn: "https://linkedin.com",
      github: "https://github.com",
    },
    {
      name: "Fang Chenyu",
      role: "Partnerships",
      img: "/team/fangchenyu.png",
      linkedIn: "https://linkedin.com",
      github: "https://github.com",
    },
    {
      name: "Tay Qi Lin",
      role: "Partnerships",
      img: "/team/tayqilin.png",
      linkedIn: "https://linkedin.com",
      github: "https://github.com",
    },
    {
      name: "Minseung Sagong",
      role: "Partnerships",
      img: "/team/minseungsagong.png",
      linkedIn: "https://linkedin.com",
      github: "https://github.com",
    },
    {
      name: "Xiao Wei",
      role: "Partnerships",
      img: "/team/xiaowei.png",
      linkedIn: "https://linkedin.com",
      github: "https://github.com",
    },
    {
      name: "Brian Lee",
      role: "Partnerships",
      img: "/team/brianlee.png",
      linkedIn: "https://linkedin.com",
      github: "https://github.com",
    },
    {
      name: "Yong Man Ting",
      role: "Partnerships",
      img: "/team/yongmanting.png",
      linkedIn: "https://linkedin.com",
      github: "https://github.com",
    },
    {
      name: "Jessica Chen",
      role: "Partnerships",
      img: "/team/jessicachen.png",
      linkedIn: "https://linkedin.com",
      github: "https://github.com",
    },
    {
      name: "Teoh Yi Wen",
      role: "Partnerships",
      img: "/team/teohyiwen.png",
      linkedIn: "https://linkedin.com",
      github: "https://github.com",
    },
    {
      name: "Jhanvi Sahu",
      role: "Partnerships",
      img: "/team/jhanvisahu.png",
      linkedIn: "https://linkedin.com",
      github: "https://github.com",
    },
    {
      name: "Arnav",
      role: "Head of Technology",
      img: "/team/arnav.png",
      linkedIn: "https://linkedin.com",
      github: "https://github.com",
    },
    {
      name: "Nathan",
      role: "Head of Technology",
      img: "/team/nathan.png",
      linkedIn: "https://linkedin.com",
      github: "https://github.com",
    },
    {
      name: "Emerson Chua",
      role: "Technology",
      img: "/team/emersonchua.png",
      linkedIn: "https://linkedin.com",
      github: "https://github.com",
    },
    {
      name: "Glen",
      role: "Technology",
      img: "/team/glen.png",
      linkedIn: "https://linkedin.com",
      github: "https://github.com",
    },
    {
      name: "Samuel",
      role: "Technology",
      img: "/team/samuel.png",
      linkedIn: "https://linkedin.com",
      github: "https://github.com",
    },
    {
      name: "Kai Teng",
      role: "Technology",
      img: "/team/kaiteng.png",
      linkedIn: "https://linkedin.com",
      github: "https://github.com",
    },
    {
      name: "Hui En",
      role: "Technology",
      img: "/team/huien.png",
      linkedIn: "https://linkedin.com",
      github: "https://github.com",
    },
    {
      name: "Glory Lion",
      role: "Technology",
      img: "/team/glorylion.png",
      linkedIn: "https://linkedin.com",
      github: "https://github.com",
    },
    {
      name: "Zilin",
      role: "Technology",
      img: "/team/zilin.png",
      linkedIn: "https://linkedin.com",
      github: "https://github.com",
    },
    {
      name: "Manish",
      role: "Technology",
      img: "/team/manish.png",
      linkedIn: "https://linkedin.com",
      github: "https://github.com",
    },
    {
      name: "Kai Kiat",
      role: "Technology",
      img: "/team/kaikiat.png",
      linkedIn: "https://linkedin.com",
      github: "https://github.com",
    },
    {
      name: "Arnav Jhajharia",
      role: "Technology",
      img: "/team/arnavjhajharia.png",
      linkedIn: "https://linkedin.com",
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
      linkedIn: "https://linkedin.com",
      github: "https://github.com",
    },
    {
      name: "Charly",
      role: "Head of Product",
      img: "/team/charly.png",
      linkedIn: "https://linkedin.com",
      github: "https://github.com",
    },
    {
      name: "Niik Seah",
      role: "Head of Design",
      img: "/team/niikseah.png",
      linkedIn: "https://linkedin.com",
      github: "https://github.com",
    },
    {
      name: "Ryan",
      role: "Product Associate",
      img: "/team/ryan.png",
      linkedIn: "https://linkedin.com",
      github: "https://github.com",
    },
    {
      name: "Joyce",
      role: "Product Associate",
      img: "/team/joyce.png",
      linkedIn: "https://linkedin.com",
      github: "https://github.com",
    },
    {
      name: "Samuel",
      role: "Product Associate",
      img: "/team/samuel(caringforlife).png",
      linkedIn: "https://linkedin.com",
      github: "https://github.com",
    },
    {
      name: "Valerie",
      role: "Product Associate",
      img: "/team/valerie.png",
      linkedIn: "https://linkedin.com",
      github: "https://github.com",
    },
    {
      name: "Nikhil",
      role: "Technology Associate",
      img: "/team/nikhil.png",
      linkedIn: "https://linkedin.com",
      github: "https://github.com",
    },
    {
      name: "Glenn",
      role: "Technology Associate",
      img: "/team/glenn.png",
      linkedIn: "https://linkedin.com",
      github: "https://github.com",
    },
    {
      name: "Hao Jun",
      role: "Technology Associate",
      img: "/team/haojun.png",
      linkedIn: "https://linkedin.com",
      github: "https://github.com",
    },
    {
      name: "Vincent",
      role: "Technology Associate",
      img: "/team/vincent.png",
      linkedIn: "https://linkedin.com",
      github: "https://github.com",
    },
    {
      name: "Hong Ming",
      role: "Technology Associate",
      img: "/team/hongming.png",
      linkedIn: "https://linkedin.com",
      github: "https://github.com",
    },
    {
      name: "Gene",
      role: "Technology Associate",
      img: "/team/gene.png",
      linkedIn: "https://linkedin.com",
      github: "https://github.com",
    },
    {
      name: "Choon Wei",
      role: "Technology Associate",
      img: "/team/choonwei.png",
      linkedIn: "https://linkedin.com",
      github: "https://github.com",
    },
    {
      name: "Ashlyn",
      role: "UI/UX Associate",
      img: "/team/ashlyn.png",
      linkedIn: "https://linkedin.com",
      github: "https://github.com",
    },
    {
      name: "Cheryl",
      role: "UI/UX Associate",
      img: "/team/cheryl.png",
      linkedIn: "https://linkedin.com",
      github: "https://github.com",
    },
    {
      name: "Hui Yi",
      role: "UI/UX Associate",
      img: "/team/huiyi.png",
      linkedIn: "https://linkedin.com",
      github: "https://github.com",
    },
    {
      name: "Audrie",
      role: "UI/UX Associate",
      img: "/team/audrie.png",
      linkedIn: "https://linkedin.com",
      github: "https://github.com",
    }
  ],
  "Action for Singapore Dogs (ASD)": [
    {
      name: "Yu Xun",
      role: "Head of Technology",
      img: "/team/yuxun.png",
      linkedIn: "https://linkedin.com",
      github: "https://github.com",
    },
    {
      name: "Brendan",
      role: "Head of Product",
      img: "/team/brendan.png",
      linkedIn: "https://linkedin.com",
      github: "https://github.com",
    },
    {
      name: "Akira",
      role: "Head of Design",
      img: "/team/akira.png",
      linkedIn: "https://linkedin.com",
      github: "https://github.com",
    },
    {
      name: "Wei Yan",
      role: "Product Associate",
      img: "/team/weiyan.png",
      linkedIn: "https://linkedin.com",
      github: "https://github.com",
    },
    {
      name: "Josalyn",
      role: "Product Associate",
      img: "/team/josalyn.png",
      linkedIn: "https://linkedin.com",
      github: "https://github.com",
    },
    {
      name: "Leticia",
      role: "Product Associate",
      img: "/team/leticia.png",
      linkedIn: "https://linkedin.com",
      github: "https://github.com",
    },
    {
      name: "Alloy",
      role: "Product Associate",
      img: "/team/alloy.png",
      linkedIn: "https://linkedin.com",
      github: "https://github.com",
    },
    {
      name: "Kelly",
      role: "Technology Associate",
      img: "/team/kelly.png",
      linkedIn: "https://linkedin.com",
      github: "https://github.com",
    },
    {
      name: "Austin",
      role: "Technology Associate",
      img: "/team/austin.png",
      linkedIn: "https://linkedin.com",
      github: "https://github.com",
    },
    {
      name: "Zing",
      role: "Technology Associate",
      img: "/team/zing.png",
      linkedIn: "https://linkedin.com",
      github: "https://github.com",
    },
    {
      name: "Zheng Yang",
      role: "Technology Associate",
      img: "/team/zhengyang.png",
      linkedIn: "https://linkedin.com",
      github: "https://github.com",
    },
    {
      name: "En Xuan",
      role: "UI/UX Associate",
      img: "/team/enxuan.png",
      linkedIn: "https://linkedin.com",
      github: "https://github.com",
    },
    {
      name: "Natalie",
      role: "UI/UX Associate",
      img: "/team/natalie.png",
      linkedIn: "https://linkedin.com",
      github: "https://github.com",
    },
    {
      name: "Ting En",
      role: "UI/UX Associate",
      img: "/team/tingen.png",
      linkedIn: "https://linkedin.com",
      github: "https://github.com",
    },
    {
      name: "Preethy",
      role: "UI/UX Associate",
      img: "/team/preethy.png",
      linkedIn: "https://linkedin.com",
      github: "https://github.com",
    }
  ],
  ItsRainingRaincoats: [
    {
      name: "Nicholas",
      role: "Head of Technology",
      img: "/team/nicholas.png",
      linkedIn: "https://linkedin.com",
      github: "https://github.com",
    },
    {
      name: "Rakshana",
      role: "Head of Product",
      img: "/team/rakshana.png",
      linkedIn: "https://linkedin.com",
      github: "https://github.com",
    },
    {
      name: "Delia",
      role: "Head of Design",
      img: "/team/delia.png",
      linkedIn: "https://linkedin.com",
      github: "https://github.com",
    },
    {
      name: "Wilson",
      role: "Product Associate",
      img: "/team/wilson.png",
      linkedIn: "https://linkedin.com",
      github: "https://github.com",
    },
    {
      name: "Dongyyun",
      role: "Product Associate",
      img: "/team/dongyun.png",
      linkedIn: "https://linkedin.com",
      github: "https://github.com",
    },
    {
      name: "Talia",
      role: "Product Associate",
      img: "/team/talia.png",
      linkedIn: "https://linkedin.com",
      github: "https://github.com",
    },
    {
      name: "Rachel",
      role: "Product Associate",
      img: "/team/rachel.png",
      linkedIn: "https://linkedin.com",
      github: "https://github.com",
    },
    {
      name: "Soong Shao Zhi",
      role: "Technology Associate",
      img: "/team/soongshaozhi.png",
      linkedIn: "https://linkedin.com",
      github: "https://github.com",
    },
    {
      name: "Manish",
      role: "Technology Associate",
      img: "/team/manish(itsrainingraincoats).png",
      linkedIn: "https://linkedin.com",
      github: "https://github.com",
    },
    {
      name: "Lucas",
      role: "Technology Associate",
      img: "/team/lucas.png",
      linkedIn: "https://linkedin.com",
      github: "https://github.com",
    },
    {
      name: "Adrian",
      role: "Technology Associate",
      img: "/team/adrian.png",
      linkedIn: "https://linkedin.com",
      github: "https://github.com",
    },
    {
      name: "Zeng Fu",
      role: "Technology Associate",
      img: "/team/zengfu.png",
      linkedIn: "https://linkedin.com",
      github: "https://github.com",
    },
    {
      name: "Gabriel",
      role: "Technology Associate",
      img: "/team/gabriel.png",
      linkedIn: "https://linkedin.com",
      github: "https://github.com",
    },
    {
      name: "Bryan",
      role: "Technology Associate",
      img: "/team/bryan.png",
      linkedIn: "https://linkedin.com",
      github: "https://github.com",
    },
    {
      name: "Zheng Yang",
      role: "Technology Associate",
      img: "/team/zhengyang(itsrainingraincoats).png",
      linkedIn: "https://linkedin.com",
      github: "https://github.com",
    },
    {
      name: "Vikram",
      role: "UI/UX Associate",
      img: "/team/vikram.png",
      linkedIn: "https://linkedin.com",
      github: "https://github.com",
    },
    {
      name: "Chloe",
      role: "UI/UX Associate",
      img: "/team/chloe.png",
      linkedIn: "https://linkedin.com",
      github: "https://github.com",
    },
    {
      name: "Gracia",
      role: "UI/UX Associate",
      img: "/team/gracia.png",
      linkedIn: "https://linkedin.com",
      github: "https://github.com",
    },
    {
      name: "Kay Woon",
      role: "UI/UX Associate",
      img: "/team/kaywoon.png",
      linkedIn: "https://linkedin.com",
      github: "https://github.com",
    }
  ],
  SiloamXperience: [
    {
      name: "Lavanya",
      role: "Head of Technology",
      img: "/team/lavanya.png",
      linkedIn: "https://linkedin.com",
      github: "https://github.com",
    },
    {
      name: "Mehul",
      role: "Head of Product",
      img: "/team/mehul.png",
      linkedIn: "https://linkedin.com",
      github: "https://github.com",
    },
    {
      name: "Clare",
      role: "Head of Design",
      img: "/team/clare.png",
      linkedIn: "https://linkedin.com",
      github: "https://github.com",
    },
    {
      name: "Samantha",
      role: "Product Associate",
      img: "/team/samantha.png",
      linkedIn: "https://linkedin.com",
      github: "https://github.com",
    },
    {
      name: "Yiting",
      role: "Product Associate",
      img: "/team/yiting.png",
      linkedIn: "https://linkedin.com",
      github: "https://github.com",
    },
    {
      name: "Luvay",
      role: "Product Associate",
      img: "/team/luvay.png",
      linkedIn: "https://linkedin.com",
      github: "https://github.com",
    },
    {
      name: "Cho",
      role: "Product Associate",
      img: "/team/cho.png",
      linkedIn: "https://linkedin.com",
      github: "https://github.com",
    },
    {
      name: "Jun Wei",
      role: "Frontend Lead",
      img: "/team/junwei.png",
      linkedIn: "https://linkedin.com",
      github: "https://github.com",
    },
    {
      name: "Lucius",
      role: "Backend Lead",
      img: "/team/lucius.png",
      linkedIn: "https://linkedin.com",
      github: "https://github.com",
    },
    {
      name: "Xiangrui",
      role: "Technology Associate",
      img: "/team/xiangrui.png",
      linkedIn: "https://linkedin.com",
      github: "https://github.com",
    },
    {
      name: "Tasmiyah",
      role: "Technology Associate",
      img: "/team/tasmiyah.png",
      linkedIn: "https://linkedin.com",
      github: "https://github.com",
    },
    {
      name: "Clement",
      role: "Technology Associate",
      img: "/team/clement.png",
      linkedIn: "https://linkedin.com",
      github: "https://github.com",
    },
    {
      name: "Aloysius",
      role: "Technology Associate",
      img: "/team/aloysius.png",
      linkedIn: "https://linkedin.com",
      github: "https://github.com",
    },
    {
      name: "Kai",
      role: "Technology Associate",
      img: "/team/kai.png",
      linkedIn: "https://linkedin.com",
      github: "https://github.com",
    },
    {
      name: "Chien Yi",
      role: "UI/UX Associate",
      img: "/team/chienyi.png",
      linkedIn: "https://linkedin.com",
      github: "https://github.com",
    },
    {
      name: "Nidia",
      role: "UI/UX Associate",
      img: "/team/nidia.png",
      linkedIn: "https://linkedin.com",
      github: "https://github.com",
    },
    {
      name: "Jie Shi",
      role: "UI/UX Associate",
      img: "/team/jieshi.png",
      linkedIn: "https://linkedin.com",
      github: "https://github.com",
    },
    {
      name: "Xiang Ting",
      role: "UI/UX Associate",
      img: "/team/xiangting.png",
      linkedIn: "https://linkedin.com",
      github: "https://github.com",
    }
  ],
  "The Volunteer Switchboard": [
    {
      name: "Shaoqin",
      role: "Head of Technology",
      img: "/team/shaoqin.png",
      linkedIn: "https://linkedin.com",
      github: "https://github.com",
    },
    {
      name: "Gabrielle",
      role: "Head of Product",
      img: "/team/gabrielle.png",
      linkedIn: "https://linkedin.com",
      github: "https://github.com",
    },
    {
      name: "Priskila",
      role: "Head of Design",
      img: "/team/priskila.png",
      linkedIn: "https://linkedin.com",
      github: "https://github.com",
    },
    {
      name: "Vera",
      role: "Product Associate",
      img: "/team/vera.png",
      linkedIn: "https://linkedin.com",
      github: "https://github.com",
    },
    {
      name: "Sreelakshmi",
      role: "Product Associate",
      img: "/team/sreelakshmi.png",
      linkedIn: "https://linkedin.com",
      github: "https://github.com",
    },
    {
      name: "Qiao Enn",
      role: "Product Associate",
      img: "/team/qiaoenn.png",
      linkedIn: "https://linkedin.com",
      github: "https://github.com",
    },
    {
      name: "Kuang-Hsin",
      role: "Product Associate",
      img: "/team/kuanghsin.png",
      linkedIn: "https://linkedin.com",
      github: "https://github.com",
    },
    {
      name: "Raphael",
      role: "Technology Associate",
      img: "/team/raphael.png",
      linkedIn: "https://linkedin.com",
      github: "https://github.com",
    },
    {
      name: "Evan",
      role: "Technology Associate",
      img: "/team/evan.png",
      linkedIn: "https://linkedin.com",
      github: "https://github.com",
    },
    {
      name: "Srivathsan",
      role: "Technology Associate",
      img: "/team/srivathsan.png",
      linkedIn: "https://linkedin.com",
      github: "https://github.com",
    },
    {
      name: "Yujie",
      role: "Technology Associate",
      img: "/team/yujie.png",
      linkedIn: "https://linkedin.com",
      github: "https://github.com",
    },
    {
      name: "Nicole",
      role: "UI/UX Associate",
      img: "/team/nicole.png",
      linkedIn: "https://linkedin.com",
      github: "https://github.com",
    },
    {
      name: "Shermaine",
      role: "UI/UX Associate",
      img: "/team/shermaine.png",
      linkedIn: "https://linkedin.com",
      github: "https://github.com",
    },
    {
      name: "Jocelyn",
      role: "UI/UX Associate",
      img: "/team/jocelyn.png",
      linkedIn: "https://linkedin.com",
      github: "https://github.com",
    },
    {
      name: "Rui-En",
      role: "UI/UX Associate",
      img: "/team/ruien.png",
      linkedIn: "https://linkedin.com",
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
        <div className="mt-10 flex justify-center gap-10">
          <button
            type="button"
            className={`w-96 py-2.5 rounded-md border text-base font-semibold transition-all duration-200 ${
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
            className={`w-96 py-2.5 rounded-md border text-base font-semibold transition-all duration-200 ${
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
