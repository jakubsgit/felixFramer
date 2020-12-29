import * as React from "react";

export const clothesIcon = (icon: string, color: string, bigger?: boolean) =>
  icon === "wash" ? (
    <svg
      width={bigger ? "74" : "54"}
      height={bigger ? "74" : "54"}
      viewBox={bigger ? "0 0 54 54" : "0 0 54 54"}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="27" cy="27" r="27" fill={color} />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M27.1865 17.1318C28.3256 17.1318 29.2523 16.2051 29.2523 15.0659C29.2523 13.9267 28.3256 13 27.1865 13C26.0473 13 25.1205 13.9267 25.1205 15.0659C25.1205 16.205 26.0473 17.1318 27.1865 17.1318ZM27.1865 13.8203C27.8733 13.8203 28.432 14.3791 28.432 15.0659C28.432 15.7526 27.8732 16.3114 27.1865 16.3114C26.4996 16.3114 25.9409 15.7526 25.9409 15.0659C25.9409 14.3791 26.4996 13.8203 27.1865 13.8203ZM20.6015 24.8672C19.6365 24.8672 18.8515 24.0821 18.8515 23.1172C18.8515 22.1522 19.6365 21.3672 20.6015 21.3672C21.5665 21.3672 22.3515 22.1522 22.3515 23.1172C22.3515 24.0821 21.5665 24.8672 20.6015 24.8672ZM20.6015 22.1875C21.1141 22.1875 21.5312 22.6045 21.5312 23.1172C21.5312 23.6298 21.1141 24.0469 20.6015 24.0469C20.0889 24.0469 19.6718 23.6298 19.6718 23.1172C19.6718 22.6045 20.0889 22.1875 20.6015 22.1875ZM22.3018 36.7381C22.5283 36.7381 22.7119 36.9217 22.7119 37.1483C22.7119 37.3748 22.5283 37.5584 22.3018 37.5584C22.0753 37.5584 21.8916 37.3748 21.8916 37.1483C21.8916 36.9217 22.0753 36.7381 22.3018 36.7381ZM19.4307 36.3279C19.4307 36.5545 19.6143 36.7381 19.8408 36.7381C20.0674 36.7381 20.251 36.5545 20.251 36.3279C20.251 36.1014 20.0674 35.9178 19.8408 35.9178C19.6143 35.9178 19.4307 36.1014 19.4307 36.3279ZM38.4636 27.5495C38.6111 26.8657 39.3097 26.4189 39.9941 26.5709C40.6844 26.7242 41.1221 27.4122 40.9696 28.1045L38.6533 38.6168C38.3441 40.02 37.1278 41 35.6956 41H18.3043C16.8721 41 15.6558 40.02 15.3466 38.6168L13.0304 28.1045C12.8779 27.4121 13.3155 26.7242 14.006 26.5709C14.6878 26.4195 15.3888 26.864 15.5363 27.5493L15.6051 27.8617C15.9878 27.9444 16.2752 28.0687 16.5345 28.1807L16.5352 28.181C16.9685 28.3684 17.3427 28.5302 18.1433 28.5302C18.9441 28.5302 19.3184 28.3683 19.7518 28.181L19.7519 28.181C19.9462 28.097 20.1472 28.0101 20.3899 27.9369C20.6067 27.8714 20.8357 27.9943 20.9011 28.2112C20.9665 28.4281 20.8437 28.6569 20.6268 28.7223C20.4293 28.7819 20.2584 28.8558 20.0773 28.934L20.0771 28.9341C19.6255 29.1293 19.1136 29.3505 18.1433 29.3505C17.173 29.3505 16.6612 29.1292 16.2098 28.9341L16.2097 28.934C16.0762 28.8763 15.946 28.8201 15.8053 28.7702L17.8525 38.0617C17.8999 38.2767 18.0857 38.4269 18.3043 38.4269H35.6955C35.9142 38.4269 36.1 38.2767 36.1474 38.0616L36.7413 35.366C36.7901 35.1448 37.0092 35.0048 37.2301 35.0537C37.4514 35.1024 37.5912 35.3213 37.5424 35.5425L36.9485 38.2382C36.8176 38.8323 36.3023 39.2472 35.6956 39.2472H18.3043C17.6975 39.2472 17.1823 38.8323 17.0513 38.2382L14.7352 27.726C14.6822 27.4793 14.43 27.3171 14.1838 27.3717C13.9341 27.4272 13.7761 27.6767 13.8315 27.9281L16.1477 38.4402C16.3734 39.4644 17.2603 40.1797 18.3043 40.1797H35.6956C36.7397 40.1797 37.6265 39.4644 37.8523 38.4404L40.1686 27.9282C40.2239 27.6768 40.0659 27.4273 39.8164 27.3718C39.5693 27.3169 39.3179 27.479 39.2648 27.7261L38.9959 28.9465L38.9957 28.9482L38.9944 28.9538L38.9932 28.959L37.9137 33.8585C37.865 34.0797 37.646 34.2198 37.4249 34.1708C37.2036 34.1221 37.0638 33.9032 37.1126 33.682L38.1047 29.1788C37.8256 29.0937 37.6139 29.0023 37.4171 28.9174C36.9981 28.7366 36.6467 28.585 35.8567 28.585C35.4979 28.585 35.2251 28.6175 34.9938 28.6703C34.9226 28.7542 33.8947 29.7787 33.359 30.3126L33.3578 30.3137L33.3571 30.3144C33.1897 30.4813 33.0707 30.5998 33.0447 30.6262C32.4575 31.2201 31.4621 31.2138 30.8744 30.6262C30.6922 30.4439 30.5655 30.2268 30.4942 29.9962L27.2606 33.2298C26.9707 33.5196 26.5854 33.6793 26.1755 33.6793C25.7656 33.6793 25.3803 33.5196 25.0904 33.2298C24.9059 33.0453 24.7742 32.8221 24.7027 32.5785C24.1128 33.0028 23.2811 32.9725 22.745 32.4732C22.1791 31.9463 22.0949 31.0484 22.5575 30.4349C22.3202 30.3648 22.0968 30.2362 21.9099 30.0494C21.6201 29.7595 21.4604 29.3741 21.4604 28.9642C21.4604 28.6294 21.5669 28.3109 21.7639 28.0475C21.557 27.988 21.3608 27.8839 21.1903 27.7346C20.5289 27.1555 20.4918 26.1085 21.1148 25.4937L25.2216 21.387C25.6113 20.9973 26.06 20.6772 26.5554 20.4356L29.7526 18.8758C30.1858 18.6645 30.5782 18.3845 30.919 18.0437L35.8426 13.1201C36.0028 12.96 36.2624 12.96 36.4226 13.1201C36.5828 13.2803 36.5828 13.54 36.4226 13.7002L31.4991 18.6238C31.094 19.029 30.6274 19.3618 30.1123 19.6131L26.9151 21.1728C26.5016 21.3745 26.127 21.6417 25.8017 21.9671L21.695 26.0738C21.4051 26.3608 21.4243 26.8491 21.7308 27.1176C22.0121 27.3639 22.449 27.34 22.7257 27.0634L25.7603 24.0287C25.9205 23.8685 26.1802 23.8685 26.3404 24.0287C26.5006 24.1888 26.5005 24.4485 26.3404 24.6087L22.49 28.4591C22.2138 28.7325 22.2152 29.1945 22.49 29.4692C22.7685 29.7478 23.2216 29.7479 23.5001 29.4692L23.8253 29.1441C23.7404 29.1158 23.6615 29.0865 23.5876 29.0572C23.3769 28.9738 23.2739 28.7355 23.3572 28.5249C23.4407 28.3142 23.6792 28.2113 23.8895 28.2945C24.0602 28.3621 24.2515 28.4267 24.4981 28.4713L27.3505 25.6189C27.5107 25.4587 27.7703 25.4589 27.9306 25.6189C28.0907 25.7791 28.0907 26.0388 27.9306 26.199L25.6139 28.5157C26.1621 28.4721 26.4796 28.3354 26.8366 28.1811C27.2217 28.0147 27.6516 27.8299 28.371 27.7788L28.9407 27.2091C29.1009 27.0489 29.3606 27.0491 29.5208 27.2091C29.6809 27.3693 29.6809 27.629 29.5208 27.7892L29.4967 27.8132C30.027 27.8891 30.3818 28.0415 30.7047 28.1811C30.8104 28.2268 30.9128 28.2709 31.0185 28.3116L32.4392 26.8911C32.5993 26.7309 32.859 26.7309 33.0192 26.8911C33.1795 27.0512 33.1793 27.3109 33.0192 27.4711L31.9716 28.5187C32.0768 28.526 32.1895 28.5303 32.3134 28.5303C33.1145 28.5303 33.4889 28.3684 33.9226 28.181C34.1043 28.1025 34.2965 28.0199 34.5236 27.9491C34.6972 27.713 34.8248 27.445 34.8965 27.1588L36.0257 22.6532C36.1533 22.1446 36.4167 21.6797 36.7874 21.309L40.2998 17.796C40.4599 17.6358 40.7195 17.6358 40.8798 17.7959C41.04 17.9561 41.04 18.2158 40.8798 18.3759L37.3674 21.889C37.1016 22.1548 36.9129 22.488 36.8214 22.8527L35.6923 27.3581C35.6567 27.4998 35.6111 27.6382 35.5563 27.7726C35.6517 27.7676 35.751 27.7646 35.8566 27.7646C36.7862 27.7646 37.2042 27.9408 37.6843 28.1431L37.6843 28.1431C37.8646 28.2191 38.0537 28.2988 38.2819 28.3742L38.4636 27.5495ZM24.3142 31.8355C24.0351 32.1147 23.5818 32.1315 23.304 31.8729C23.0119 31.6009 23.0015 31.1251 23.2851 30.8444L24.7952 29.3343C24.9285 29.3446 25.072 29.3505 25.228 29.3505C26.214 29.3505 26.7211 29.1282 27.2215 28.9088L27.2561 28.8936L24.3142 31.8355ZM25.6704 32.6497C25.9489 32.9282 26.402 32.9283 26.6805 32.6497L30.3911 28.9391C29.9544 28.7492 29.5134 28.5758 28.7245 28.5854L25.6704 31.6395C25.3943 31.9129 25.3956 32.3749 25.6704 32.6497ZM32.4645 30.046C32.1909 30.3223 31.7281 30.3196 31.4544 30.046C31.24 29.8317 31.1913 29.514 31.307 29.252C31.5818 29.3114 31.907 29.3505 32.3134 29.3505C32.682 29.3505 32.9842 29.3185 33.2423 29.2682L32.4645 30.046ZM20.3692 17.3477C20.3692 18.1393 19.7252 18.7834 18.9335 18.7834C18.1419 18.7834 17.4979 18.1393 17.4979 17.3477C17.4979 16.556 18.1419 15.9119 18.9335 15.9119C19.7252 15.9119 20.3692 16.556 20.3692 17.3477ZM18.9335 16.7323C19.2729 16.7323 19.5489 17.0083 19.5489 17.3477C19.5489 17.687 19.2729 17.9631 18.9335 17.9631C18.5942 17.9631 18.3181 17.687 18.3181 17.3477C18.3181 17.0083 18.5942 16.7323 18.9335 16.7323ZM20.6612 33.4568C20.4346 33.4568 20.251 33.2732 20.251 33.0467C20.251 32.8202 20.4346 32.6365 20.6612 32.6365C20.8877 32.6365 21.0713 32.8202 21.0713 33.0467C21.0713 33.2732 20.8877 33.4568 20.6612 33.4568Z"
        fill="white"
      />
    </svg>
  ) : (
    <svg
      width={bigger ? "74" : "54"}
      height={bigger ? "74" : "54"}
      viewBox={bigger ? "0 0 54 54" : "0 0 54 54"}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="27" cy="27" r="27" fill={color} />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M40.2771 13.3003C40.4753 13.1973 40.7195 13.2744 40.8226 13.4725C40.9257 13.6707 40.8486 13.915 40.6504 14.018C38.7631 14.9997 36.7574 15.7779 34.6824 16.3342C34.6915 16.4218 34.6901 16.5109 34.6771 16.5998L34.2671 19.3875L34.9177 19.656C34.9937 19.6856 35.0468 19.735 35.0794 19.7725L36.1615 21.0627C36.3051 21.2338 36.2827 21.489 36.1115 21.6325C35.9412 21.7754 35.6859 21.7544 35.5417 21.5825L34.9716 20.9028L33.6645 26.2073L35.7796 27.8038C35.8391 27.846 35.9012 27.8351 35.9444 27.7761L38.0561 24.7175C38.0865 24.6734 38.0839 24.6136 38.0494 24.5725L36.4526 22.6686C36.3091 22.4975 36.3314 22.2424 36.5026 22.0988C36.6736 21.9552 36.9289 21.9776 37.0724 22.1488L38.6692 24.0526C38.9366 24.3715 38.9584 24.8338 38.7221 25.1768L36.6098 28.2362C36.3174 28.6636 35.7042 28.7631 35.2925 28.4498L33.6121 27.1814V39.9407C33.6121 40.4522 33.1972 40.8683 32.6871 40.8683H21.4357C20.9257 40.8683 20.5108 40.4522 20.5108 39.9407V34.4195C20.5108 34.1961 20.6919 34.015 20.9153 34.015C21.1387 34.015 21.3198 34.1961 21.3198 34.4195V39.9407C21.3198 40.0061 21.3718 40.0594 21.4357 40.0594H32.6872C32.7511 40.0594 32.8032 40.0061 32.8032 39.9407V26.6241C32.8034 26.4222 32.8286 26.2209 32.8766 26.0237L34.2934 20.2736L34.058 20.1765C33.8668 20.4789 33.5296 20.6784 33.1552 20.6784C32.6297 20.6784 32.1756 20.2863 32.0992 19.7663L32.037 19.343L31.2966 19.0376C30.8924 20.3843 29.1669 21.3733 27.0613 21.3733C24.9557 21.3733 23.2301 20.3843 22.826 19.0376L22.0856 19.343L22.0234 19.7663C21.947 20.2863 21.4929 20.6784 20.9674 20.6784C20.593 20.6784 20.2558 20.4788 20.0646 20.1764L19.8293 20.2735L21.2464 26.0247C21.294 26.2185 21.3194 26.424 21.3196 26.6241V32.8015C21.3196 33.0249 21.1386 33.206 20.9151 33.206C20.6917 33.206 20.5106 33.0249 20.5106 32.8015V27.1814L18.8305 28.4496C18.3525 28.7797 17.8055 28.6504 17.5132 28.2367L15.4009 25.1772C15.1644 24.8337 15.1861 24.3715 15.4535 24.0526L19.0434 19.7725C19.102 19.705 19.1521 19.6794 19.2052 19.656L19.8557 19.3875L19.4458 16.5998C19.4327 16.511 19.4314 16.4219 19.4404 16.3343C17.3652 15.7782 15.3595 15 13.4724 14.018C13.2742 13.9149 13.1971 13.6706 13.3003 13.4725C13.4035 13.2742 13.6477 13.1972 13.8459 13.3003C15.7398 14.2859 17.7571 15.0598 19.8448 15.6038C20.0309 15.4582 20.2615 15.3772 20.5018 15.3772H21.4332C21.7436 15.3772 22.038 15.5119 22.2409 15.7468C22.3452 15.8675 22.4195 16.0083 22.4613 16.1582C23.9788 16.4053 25.5221 16.5307 27.0534 16.5311H27.0617C28.5985 16.5311 30.1443 16.4056 31.6617 16.1578C31.7035 16.008 31.7778 15.8674 31.8819 15.7468C32.0848 15.5119 32.3792 15.3772 32.6897 15.3772H33.621C33.8614 15.3772 34.0919 15.4582 34.278 15.6037C36.3656 15.0595 38.3829 14.2856 40.2771 13.3003ZM18.3436 27.8036L20.4583 26.2073L19.1512 20.9028L16.0734 24.5725C16.039 24.6136 16.0364 24.6733 16.067 24.7179L18.1788 27.7766C18.2219 27.8352 18.2842 27.8457 18.3436 27.8036ZM21.6894 16.4754L21.689 16.4802L21.6888 16.4821L21.2231 19.6486C21.2046 19.7744 21.0947 19.8693 20.9675 19.8693C20.8403 19.8693 20.7304 19.7744 20.7118 19.6485L20.2462 16.4821C20.2312 16.3803 20.2774 16.309 20.3063 16.2756C20.3352 16.2422 20.399 16.1861 20.5018 16.1861H21.4332C21.536 16.1861 21.5998 16.2422 21.6287 16.2756C21.657 16.3083 21.7013 16.3773 21.6894 16.4754ZM23.6221 18.868C24.0605 20.0709 25.7803 20.5643 27.0615 20.5643C28.3618 20.5643 30.0452 20.0487 30.5008 18.868H23.6221ZM31.1204 18.0896C31.0715 18.0695 31.0191 18.0591 30.9662 18.0591H23.1567C23.1038 18.0591 23.0513 18.0695 23.0024 18.0896L22.2228 18.4113L22.4343 16.9729C23.9615 17.216 25.5131 17.3397 27.0532 17.3401H27.0617C28.607 17.3401 30.1614 17.2163 31.6885 16.9726L31.9 18.4113L31.1204 18.0896ZM33.411 19.6485L33.8767 16.4821C33.8916 16.3803 33.8455 16.309 33.8166 16.2756C33.7877 16.2422 33.7239 16.1861 33.621 16.1861H32.6897C32.5868 16.1861 32.523 16.2422 32.4941 16.2756C32.4661 16.3081 32.4221 16.3766 32.4334 16.4739L32.4339 16.48L32.434 16.4821L32.8997 19.6485C32.9182 19.7744 33.0282 19.8693 33.1554 19.8693C33.2826 19.8693 33.3925 19.7744 33.411 19.6485Z"
        fill="white"
      />
    </svg>
  );