import { RecipeObj } from "@/Domain/Factory";

export const recipesObj: RecipeObj[] = [
  {
    id: 1,
    title: "ゴーヤと桜海老の塩昆布和え",
    description: "我が家の常備菜一番手。ゴーヤ好きにはオススメです。",
    image_url:
      "https://img.cpcdn.com/recipes/4053659/750x500cq60/ed3f79a95814e194a9c3c166a967ed43?p=1473034120",
    author: {
      user_name: "john",
    },
    published_at: "2020/03/22",
    steps: [
      "ゴーヤを縦半分に切ってワタを取り除き薄切りにする",
      "沸騰したお湯でゴーヤを1分ほど茹で、冷水でさらしてぎゅっと絞って水気を切る",
      "桜海老、塩昆布、醤油、ごま油と和える",
    ],
    ingredients: [
      {
        name: "ゴーヤ",
        quantity: "1本",
      },
      {
        name: "桜海老",
        quantity: "10g",
      },
      {
        name: "塩昆布",
        quantity: "10g",
      },
      {
        name: "醤油",
        quantity: "大さじ1/2",
      },
      {
        name: "ごま油",
        quantity: "大さじ1/2",
      },
    ],
    related_recipes: [1, 2, 3],
  },
  {
    id: 2,
    title: "白だしだけでできる、超簡単たまごスープ",
    description: "味付けは白だしだけ。超簡単にできるたまごスープです。",
    image_url:
      "https://img.cpcdn.com/recipes/3547216/750x500cq60/555414daae46ff6269d741e60c985fa1?p=1448895100",
    author: {
      user_name: "john",
    },
    published_at: "2020/03/22",
    steps: [
      "水を火にかけ沸騰したら溶いたたまごを混ぜながら加える",
      "白だしを加える",
    ],
    ingredients: [
      {
        name: "白だし",
        quantity: "大さじ1",
      },
      {
        name: "卵",
        quantity: "1個",
      },
      {
        name: "水",
        quantity: "400CC",
      },
    ],
    related_recipes: [1, 2, 3],
  },
  {
    id: 3,
    title: "フライドごぼう山椒風味",
    description: "お酒のおつまみに最高です",
    image_url:
      "https://img.cpcdn.com/recipes/5827446/750x500cq60/f7a06afd8bfa671148efd983d5ed193b?p=1568543589",
    author: {
      user_name: "john",
    },
    published_at: "2020/03/22",
    steps: [
      "ごぼうは土を洗い流して乱切りにする",
      "ごぼうと片栗粉をビニール袋に入れて全体にまぶす",
      "フライパンに大さじ3の油を入れて熱し、2のごぼうをいれ、中火で片面に焼き色がつくまで揚げ焼きにする",
      "焼き色がついたらびっくり変えし、もう片面にも焼き色がつくまでじっくり揚げ焼きにする",
      "焼き上がったら皿に移し、塩と山椒（粉末よりもミルで挽くものがおすすめ）をお好みでまぶして完成！",
    ],
    ingredients: [
      {
        name: "ごぼう",
        quantity: "1本",
      },
      {
        name: "片栗粉",
        quantity: "大さじ1",
      },
      {
        name: "油",
        quantity: "大さじ3",
      },
      {
        name: "塩",
        quantity: "適量",
      },
      {
        name: "山椒",
        quantity: "適量",
      },
    ],
    related_recipes: [1, 2, 3],
  },
];
