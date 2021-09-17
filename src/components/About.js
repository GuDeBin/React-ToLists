import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h4>版本 1.0.0</h4>
      <p>好吧，这是我抄的、汉化的！</p>
      <Link to="/">返回首页</Link>
    </div>
  );
};

export default About;
