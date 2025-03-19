import React from "react";

const Blog = () => {
  return (
    <section id="blog" className="blog_area pt-80 pb-80">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section_title text-center pb-25">
              <h4 className="title">From The Blog</h4>
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sediam nonumy eirmod tempor invidunt ut labore et dolore.</p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          {[
            { title: "Unlimited features with free updates.", img: "/assets/images/blog-1.jpg" },
            { title: "Easy to use and customize the App.", img: "/assets/images/blog-2.jpg" },
            { title: "Super fast and strong security.", img: "/assets/images/blog-3.jpg" }
          ].map((post, index) => (
            <div key={index} className="col-lg-4 col-md-8">
              <div className={`single_blog blog_${index + 1} mt-30 wow fadeInUp`} data-wow-duration="1.3s" data-wow-delay={`${0.2 + index * 0.3}s`}>
                <div className="blog_image">
                  <img src={post.img} alt="blog" />
                </div>
                <div className="blog_content">
                  <h4 className="blog_title"><a href="#">{post.title}</a></h4>
                  <a href="#" className="main-btn">Read More</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
