import { Feature } from "@/types/feature";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: (
      <svg width="40" height="41" viewBox="0 0 40 41" className="fill-current">
        <path
          d="M37.5 18.8332H35.8333V9.58317C35.8333 8.46151 35.3862 7.38579 34.5987 6.59827C33.8112 5.81075 32.7355 5.36365 31.6138 5.36365L8.38584 5.38317C7.26418 5.38317 6.18846 5.83027 5.40094 6.61779C4.61342 7.40531 4.16632 8.48103 4.16632 9.60267V18.8332H2.49967V31.4165H12.4997V38.8332H27.4997V31.4165H37.4997L37.5 18.8332ZM6.66634 9.58317C6.66634 9.13115 6.84292 8.69723 7.15798 8.38217C7.47303 8.06712 7.90696 7.89053 8.35897 7.89053L31.6413 7.87099C32.0933 7.87099 32.5272 8.04758 32.8423 8.36263C33.1573 8.67769 33.3339 9.11162 33.3339 9.56363V18.8332H6.66634V9.58317ZM9.99967 36.3332V31.4165H29.9997V36.3332H9.99967ZM34.9997 28.9165H4.99967V21.3332H34.9997V28.9165Z"
          fill=""
        />
        <path
          d="M14.1667 24.8333H11.6667V27.3333H14.1667V24.8333Z"
          fill=""
        />
        <path
          d="M19.1667 24.8333H16.6667V27.3333H19.1667V24.8333Z"
          fill=""
        />
        <path
          d="M24.1667 24.8333H21.6667V27.3333H24.1667V24.8333Z"
          fill=""
        />
      </svg>
    ),
    title: "Business Process Automation with AI Agents",
    paragraph:
      "We streamline repetitive tasks and optimize workflows using intelligent AI agents, helping you boost efficiency, reduce errors, and scale smarter.",
  },
  {
    id: 2,
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
        <path
          d="M20 0C8.95414 0 0 8.95414 0 20C0 31.0459 8.95414 40 20 40C31.0459 40 40 31.0459 40 20C40 8.95414 31.0459 0 20 0ZM20 36.6667C11.4237 36.6667 4.16667 29.4096 4.16667 20.8333C4.16667 12.257 11.4237 5 20 5C28.5763 5 35.8333 12.257 35.8333 20.8333C35.8333 29.4096 28.5763 36.6667 20 36.6667Z"
          fill=""
        />
        <path
          d="M20 10C15.586 10 12.0834 13.5026 12.0834 17.9167C12.0834 22.3307 15.586 25.8333 20 25.8333C24.414 25.8333 27.9167 22.3307 27.9167 17.9167C27.9167 13.5026 24.414 10 20 10ZM20 23.3333C17.0579 23.3333 14.5834 20.8589 14.5834 17.9167C14.5834 14.9746 17.0579 12.5 20 12.5C22.9421 12.5 25.4167 14.9746 25.4167 17.9167C25.4167 20.8589 22.9421 23.3333 20 23.3333Z"
          fill=""
        />
      </svg>
    ),
    title: "Mobile App Development",
    paragraph:
      "We build responsive, user-friendly mobile applications tailored for both Android and iOS to deliver seamless digital experiences to your users.",
  },
  {
    id: 3,
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
        <path
          d="M30 0H10C4.47715 0 0 4.47715 0 10V30C0 35.5228 4.47715 40 10 40H30C35.5228 40 40 35.5228 40 30V10C40 4.47715 35.5228 0 30 0ZM35 30C35 33.866 31.866 37 28 37H12C8.13401 37 5 33.866 5 30V10C5 6.13401 8.13401 3 12 3H28C31.866 3 35 6.13401 35 10V30Z"
          fill=""
        />
        <path
          d="M20 10C17.2386 10 15 12.2386 15 15C15 17.7614 17.2386 20 20 20C22.7614 20 25 17.7614 25 15C25 12.2386 22.7614 10 20 10ZM20 17C18.8954 17 18 16.1046 18 15C18 13.8954 18.8954 13 20 13C21.1046 13 22 13.8954 22 15C22 16.1046 21.1046 17 20 17Z"
          fill=""
        />
        <path
          d="M20 23C16.6863 23 10 24.6863 10 28V30H30V28C30 24.6863 23.3137 23 20 23Z"
          fill=""
        />
      </svg>
    ),
    title: "Software Learning",
    paragraph:
      "We offer hands-on training and learning programs to help individuals and teams acquire in-demand software skills and stay ahead in tech.",
  },
  {
    id: 4,
    icon: (
      <svg width="40" height="42" viewBox="0 0 40 42" className="fill-current">
        <path
          d="M20 0C8.95414 0 0 9.49187 0 21.2021C0 32.9124 8.95414 42.4042 20 42.4042C31.0459 42.4042 40 32.9124 40 21.2021C40 9.49187 31.0459 0 20 0ZM20 38.9474C11.3447 38.9474 4.21053 31.4918 4.21053 21.2021C4.21053 10.9125 11.3447 3.45687 20 3.45687C28.6553 3.45687 35.7895 10.9125 35.7895 21.2021C35.7895 31.4918 28.6553 38.9474 20 38.9474Z"
          fill=""
        />
        <path
          d="M28.4211 14.6667H11.5789C10.7061 14.6667 10 15.3621 10 16.2105V26.193C10 27.0414 10.7061 27.7368 11.5789 27.7368H28.4211C29.2939 27.7368 30 27.0414 30 26.193V16.2105C30 15.3621 29.2939 14.6667 28.4211 14.6667ZM27.3684 24.7368H12.6316V17.6667H27.3684V24.7368Z"
          fill=""
        />
      </svg>
    ),
    title: "SMS Sending Services",
    paragraph:
      "We provide reliable and scalable SMS solutions for alerts, promotions, and customer engagement—ensuring your messages reach the right audience, instantly.",
  },
];

export default featuresData;
