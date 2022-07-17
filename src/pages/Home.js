import Banner from "../assets/banner.jpg"
import MenuSection from "./MenuSection"
import foodMenus from "./foodMenus"

const MenuSectionGenerator = (
  menus
) => {
  // Generate uniq category from food menus
  const foodCategories = [...new Set(menus.map(item => item.category))]

  return foodCategories.map((category) => (
    <MenuSection
      key={category}
      category={category}
      // Filter only match food categories to render each section
      menus={menus.filter((menu) => menu.category === category)}
    />
  ))
}

export const Home = () => {
  return (
    <div className="px-4">
      <h1 className="text-3xl text-center mt-4">ร้านอาหารครัวคุณบิน</h1>
      <p className="mt-2">
        ร้านอาหารครัวคุณบินปรุงด้วยใจ เหมือนทำให้คนในครอบครัวทาน
        เราเปิดให้บริการตั้งแต่ปีพ.ศ. 2535 กว่า 30 ปีที่เรานำเสนอความ
        อร่อยแบบไทยแท้ เราคัดสรรวัตถุดิบชั้นดี ปลอดภัย ออร์แกนิค จาก
        เกษตรกรในพื้นที่สุโขทัย ปรุงด้วยสูตรลับต้นตำรับชาววังที่สืบทอด
        กันมารุ่นสู่รุ่น จัดแต่งมาบนจาน พร้อมเสิร์ฟความอร่อยให้กับคุณ
      </p>
      <img src={Banner} className="w-full mt-4 rounded-lg"  alt="" />
      { MenuSectionGenerator(foodMenus) }
    </div>
  )
}