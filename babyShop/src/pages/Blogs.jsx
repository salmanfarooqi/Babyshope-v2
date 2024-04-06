import Layout from "../components/Layout";
import HomeBannar from "../components/HomeBannar";
import Card from "../components/Card";
import RecentBlog from "../components/RecentBlog";
import SimpleSlider from "../components/SimpleSlider";

const Blogs = () => {
  const data = [
    {
      imageUrl: "https://png.pngtree.com/png-vector/20220603/ourlarge/pngtree-rag-doll-toy-wrist-png-image_4843361.png",
      title: "First Time Home Owner Ideas",
      author: "Kristin Watson",
      date: " Dec 19, 2021",
      link: "",
    },
    {
      imageUrl: "https://png.pngtree.com/element_our/png_detail/20181113/isometric-kid-toy-png_236063.jpg",
      title: "First Time Home Owner Ideas",
      author: "Kristin Watson",
      date: " Dec 19, 2021",
      link: "",
    },
    {
      imageUrl: "https://m.media-amazon.com/images/I/51bhuTrVWZL._SL500_.jpg",
      title: "First Time Home Owner Ideas",
      author: "Kristin Watson",
      date: " Dec 19, 2021",
      link: "",
    },
    {
      imageUrl:"https://m.media-amazon.com/images/I/51u3J4tZpSL._SL500_.jpg",
      title: "First Time Home Owner Ideas",
      author: "Kristin Watson",
      date: " Dec 19, 2021",
      link: "",
    },
    {
      imageUrl: "	https://m.media-amazon.com/images/I/51Ty-AQerBL._SL500_.jpg",
      title: "First Time Home Owner Ideas",
      author: "Kristin Watson",
      date: " Dec 19, 2021",
      link: "",
    },
    {
      imageUrl: "https://m.media-amazon.com/images/I/51bhuTrVWZL._SL500_.jpg",
      title: "First Time Home Owner Ideas",
      author: "Kristin Watson",
      date: " Dec 19, 2021",
      link: "",
    },
    {
      imageUrl:"https://m.media-amazon.com/images/I/51Ty-AQerBL._SL500_.jpg",
      title: "First Time Home Owner Ideas",
      author: "Kristin Watson",
      date: " Dec 19, 2021",
      link: "",
    },
    {
      imageUrl: "https://m.media-amazon.com/images/I/51bhuTrVWZL._SL500_.jpg",
      title: "First Time Home Owner Ideas",
      author: "Kristin Watson",
      date: " Dec 19, 2021",
      link: "",
    },
    {
      imageUrl: "	https://m.media-amazon.com/images/I/51Ty-AQerBL._SL500_.jpg",
      title: "First Time Home Owner Ideas",
      author: "Kristin Watson",
      date: " Dec 19, 2021",
      link: "",
    },
  ];

  const dummyTestimonials = [
    {
      quote:
        "Impeccable product quality! Every piece of furniture I've purchased from Furni Website has exceeded my expectations in terms of both style and durability. The attention to detail and craftsmanship are truly outstanding.",
      image: "/featured/person-1.jpg",
      author: "Maria Jones",
      position: "CEO, Co-Founder, XYZ Inc.",
    },
    {
      quote:
        "Impeccable product quality! Every piece of furniture I've purchased from Furni Website has exceeded my expectations in terms of both style and durability. The attention to detail and craftsmanship are truly outstanding.",
      image: "/featured/person-1.jpg",
      author: "Maria Jones",
      position: "CEO, Co-Founder, XYZ Inc.",
    },
    {
      quote:
        "Impeccable product quality! Every piece of furniture I've purchased from Furni Website has exceeded my expectations in terms of both style and durability. The attention to detail and craftsmanship are truly outstanding.",
      image: "/featured/person-1.jpg",
      author: "Maria Jones",
      position: "CEO, Co-Founder, XYZ Inc.",
    },
    {
      quote: "Another testimonial",
      image: "/featured/person-2.jpg",
      author: "John Doe",
      position: "CTO, ABC Inc.",
    },
    // Add more dummy testimonial objects as needed
  ];

  return (
    <Layout>
      <HomeBannar
        Button1Classname="bg-[#F9BF29]"
        Button2Classname="border-[#9DACA0] border-2"
        title="Blog"
        description=" 
        Explore our blog for valuable insights, expert tips, and practical advice on all things baby and parenting. From developmental milestones to product reviews, we're here to support you every step of the way on your parenting journey."
        buttonText1="Shop Now"
        buttonText2="Explore"
        imageUrl="/public/featured/couch.png"
      />
      <div className="w-full flex justify-center  py-10">
        <div className="w-[90%] flex flex-wrap justify-center">
          {data.map((item, index) => (
            <RecentBlog
              key={index} // Make sure to add a unique key prop when iterating over items in a list
              imageUrl={item.imageUrl}
              title={item.title}
              author={item.author}
              date={item.date}
              link={item.link}
              className="!w-[320px] mb-4 mx-4 py-5" // Adjust margins to create spacing between items
            />
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center text-4xl font-semibold text-gray-700 mb-5">Testimonials</div>
      <SimpleSlider testimonials={dummyTestimonials} />
    </Layout>
  );
};

export default Blogs;
