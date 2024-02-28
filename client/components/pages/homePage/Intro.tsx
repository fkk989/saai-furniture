import { Navigator } from "../../clientComponents";

interface IntroProp {
  location?: string;
}

export const Intro: React.FC<IntroProp> = ({ location }) => {
  return (
    <div className="w-[100%] flex max-mobile:flex-col-reverse justify-center items-center mt-[50px] max-mobile:gap-[30px] max-mobile:p-[20px]">
      <div className="mobile:w-[50%] flex flex-col">
        <div className="w-[100%] flex flex-col  justify-center gap-[10px]">
          <h1 className="  flex flex-wrap text-[25px] mobile:text-[37px] font-bold text-[#B19777] capitalize">
            Welcome To Sai Furniture Art{" "}
            {location && (
              <span className="flex gap-[10px]">
                ,
                {location.split("-").map((location) => {
                  return <span>{location}</span>;
                })}
              </span>
            )}
          </h1>
          <div className="w-[100px] h-[3px] bg-[#B19777]"></div>
        </div>
        <div className="flex flex-col gap-[7px] mt-[20px]">
          <h2 className="text-[18px] mobile:text-[30px] font-[500]">
            Furniture Manufacturers
          </h2>
          <p className="max-mobile:text-[13px] text-left">
            Top 5 Best Royal Furniture Manufacturers in Delhi Meet Sai Furniture
            Art- the right platform to experience the luxurious and classical
            range of elegant sofa sets. With significant years of experience in
            this respective field, we have made incredible growth to match your
            comfort level along with sophisticated design. Further, we are the
            leading Top 5 Best Royal Furniture Manufacturers in Delhi. Whereas
            the establishment years of this renowned company lay in the years
            2005 under the unparalleled leadership of a majestic personality
            named O.P Bajaj who is known for providing immaculate product
            quality and tailored services. While fabricating this luxurious
            furniture, our well-trained craftsman ensures building robust
            quality and durable solid finish of the furniture. This helps us to
            allow our clients to experience the culture of care and add immense
            unmatched vibrant ambiance to their surroundings. Now, feel free to
            reach out to our prompt services.
          </p>
          <p className="max-mobile:text-[13px] text-left">
            <span className="mobile:text-[18px] font-[600]">
              Best Living Room Sofa Sets Suppliers in India
            </span>
            If you’re searching for the best Living Room Sofa Sets Suppliers in
            India, choose Sai Furniture Art, one of the most renowned and
            foremost companies that have extensive years of expertise in dealing
            with the product needs of our clients. Further, we are
            well-recognized to serve our holistic approach and fast-paced
            product delivery in all the major locations of India. Besides this,
            we have gained an exceptional reputation as the most trustworthy
            supplier and manufacturer in this industry. Moreover, the features
            of our living sofa set include furnished wooden, durable,
            top-quality, and low maintenance. So, place your order from us and
            get ready to change our living space into a luxurious way
          </p>
          <p className="max-mobile:text-[13px] text-left">
            If you’re trying to find the top Dining Set Suppliers in India, get
            connected with Sai Furniture Art- one of the most reliable and
            prominent companies that offers the best collection of furniture
            from modern to traditional one. Also, it is hard to find our
            sophisticated and finest design of dining sets at competitive
            pricing. Moreover, our team of skilled and well-experienced workers
            does collaborative work to meet the client-focused and satisfaction
            in the right way. So, make the right decision with our premium
            furniture services.
          </p>
          <Navigator to="/about">
            <button className="w-[100px] h-[40px] rounded-full bg-[#2A1B18] text-[12px] text-white">
              Read More
            </button>
          </Navigator>
        </div>
      </div>
      <div className="mobile:w-[40%] h-[100%] flex mobile:justify-end justify-center">
        <img src="/home/intro.jpeg" alt="img" className="w-[90%] h-[100%]" />
      </div>
    </div>
  );
};
