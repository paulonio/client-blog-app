import React, { FC, SVGProps } from 'react';

const MoonIcon: FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      role="img"
      focusable="false"
      fill="currentColor"
      width="136"
      height="32"
      viewBox="0 0 136 32"
      {...props}
    >
      <path d="M32.9336 7.80615H36.0525V22.968H32.9336V7.80615Z" />
      <path d="M37.7974 17.7737C37.7974 16.6828 38.1183 15.6166 38.7194 14.71C39.3206 13.8035 40.1748 13.0974 41.174 12.6814C42.1731 12.2654 43.2722 12.1582 44.3318 12.3733C45.3914 12.5885 46.3639 13.1162 47.126 13.8898C47.8881 14.6633 48.4055 15.6478 48.6125 16.7184C48.8196 17.7891 48.707 18.8976 48.2891 19.9037C47.8712 20.9097 47.1668 21.7678 46.2651 22.3693C45.3634 22.9708 44.3051 23.2886 43.2243 23.2824C42.5074 23.288 41.7967 23.1491 41.1336 22.8739C40.4707 22.5987 39.8688 22.1926 39.3633 21.6796C38.8578 21.1665 38.4589 20.5567 38.1901 19.886C37.9212 19.2153 37.7876 18.4971 37.7974 17.7737ZM45.6155 17.7737C45.6032 17.3035 45.4538 16.8473 45.186 16.4622C44.9182 16.0771 44.5439 15.7803 44.1098 15.6089C43.6757 15.4374 43.2012 15.399 42.7456 15.4982C42.29 15.5975 41.8734 15.8302 41.5482 16.1671C41.2229 16.5041 41.0032 16.9304 40.9167 17.3926C40.8302 17.8548 40.8806 18.3326 41.0617 18.7661C41.2428 19.1996 41.5465 19.5696 41.9349 19.8297C42.3232 20.09 42.7789 20.2288 43.2451 20.229C43.5625 20.2352 43.8776 20.1753 44.171 20.0531C44.4644 19.9307 44.7297 19.7488 44.9502 19.5183C45.1707 19.2879 45.3418 19.014 45.4526 18.7138C45.5635 18.4136 45.6119 18.0936 45.5947 17.7737H45.6155Z" />
      <path d="M60.9925 12.5802V22.4538C60.9925 25.9374 58.2894 27.4168 55.5552 27.4168C54.5907 27.4967 53.6234 27.3034 52.7619 26.8585C51.9004 26.4135 51.1792 25.7348 50.6792 24.8986L53.3095 23.3667C53.5227 23.8004 53.8617 24.1582 54.2815 24.3926C54.7013 24.6269 55.1818 24.7265 55.6591 24.6783C55.9632 24.716 56.2718 24.6856 56.5628 24.589C56.8539 24.4924 57.1201 24.3322 57.3427 24.1196C57.5652 23.9071 57.7384 23.6476 57.8499 23.3596C57.9614 23.0716 58.0086 22.7623 57.9879 22.4538V21.499C57.625 21.9431 57.1645 22.2958 56.6429 22.5289C56.1214 22.762 55.5531 22.8692 54.9834 22.8421C53.6047 22.8421 52.2826 22.2893 51.3077 21.3054C50.3328 20.3215 49.7852 18.9871 49.7852 17.5957C49.7852 16.2043 50.3328 14.8699 51.3077 13.886C52.2826 12.9021 53.6047 12.3493 54.9834 12.3493C55.5531 12.3222 56.1214 12.4294 56.6429 12.6625C57.1645 12.8956 57.625 13.2483 57.9879 13.6924V12.6432L60.9925 12.5802ZM57.9879 17.5642C58.0086 17.0622 57.8802 16.5655 57.6189 16.1377C57.3576 15.7101 56.9756 15.371 56.5219 15.1642C56.0682 14.9574 55.5635 14.8924 55.0728 14.9774C54.5823 15.0624 54.128 15.2935 53.7686 15.6412C53.4091 15.9888 53.161 16.437 53.056 16.9281C52.9509 17.4193 52.9939 17.9309 53.1793 18.3972C53.3647 18.8635 53.6841 19.2631 54.0964 19.5447C54.5086 19.8263 54.9949 19.9771 55.4928 19.9776C55.8177 20.0011 56.1438 19.9557 56.4501 19.8442C56.7565 19.7327 57.0363 19.5576 57.2715 19.3302C57.5066 19.1027 57.6918 18.8281 57.8153 18.5239C57.9387 18.2197 57.9975 17.8928 57.9879 17.5642Z" />
      <path d="M62.7504 17.7738C62.7504 16.6838 63.0707 15.6184 63.6709 14.7123C64.2711 13.8061 65.1242 13.1001 66.1221 12.6835C67.1201 12.2668 68.2181 12.1583 69.2771 12.3718C70.3361 12.5852 71.3087 13.1109 72.0716 13.8823C72.8345 14.6538 73.3535 15.6363 73.5629 16.7055C73.7724 17.7748 73.6628 18.8827 73.2481 19.8891C72.8334 20.8955 72.1322 21.7551 71.2332 22.3591C70.3343 22.9632 69.278 23.2845 68.1981 23.2825C67.4798 23.2894 66.7674 23.1517 66.1027 22.8772C65.4379 22.6027 64.8341 22.1971 64.3267 21.684C63.8193 21.1709 63.4185 20.5608 63.1478 19.8893C62.8771 19.2179 62.742 18.4986 62.7504 17.7738ZM70.5685 17.7738C70.5562 17.303 70.4065 16.8464 70.1383 16.4612C69.87 16.076 69.495 15.7791 69.0604 15.608C68.6256 15.4369 68.1506 15.399 67.6948 15.4991C67.2389 15.5993 66.8224 15.833 66.4975 16.171C66.1727 16.509 65.9538 16.9362 65.8685 17.3991C65.7832 17.8621 65.8351 18.3402 66.0177 18.7735C66.2004 19.2067 66.5058 19.576 66.8954 19.8349C67.2851 20.0939 67.7419 20.231 68.2085 20.2291C68.5259 20.2353 68.841 20.1754 69.1344 20.0532C69.4278 19.9308 69.6931 19.7488 69.9136 19.5183C70.1341 19.2879 70.3052 19.0141 70.416 18.7139C70.5269 18.4137 70.5753 18.0937 70.5581 17.7738H70.5685Z" />
      <path d="M75.0898 9.79979C75.0898 9.43039 75.1984 9.06937 75.4017 8.76217C75.6051 8.45505 75.8941 8.21562 76.2323 8.0743C76.5704 7.93294 76.9425 7.89595 77.3014 7.96802C77.6604 8.04008 77.9902 8.218 78.249 8.47917C78.5078 8.74034 78.684 9.07314 78.7555 9.43548C78.8268 9.79774 78.7902 10.1733 78.6501 10.5145C78.51 10.8559 78.2728 11.1476 77.9686 11.3528C77.6642 11.558 77.3064 11.6675 76.9404 11.6675C76.4513 11.6621 75.9838 11.4635 75.6379 11.1144C75.292 10.7654 75.0953 10.2935 75.0898 9.79979ZM75.3913 12.5804H78.5103V22.9681H75.3913V12.5804Z" />
      <path d="M91.8591 17.7733C91.8943 18.4642 91.7935 19.1552 91.5625 19.8065C91.3323 20.4579 90.9759 21.0569 90.5147 21.5688C90.0542 22.0808 89.4971 22.4958 88.8769 22.7898C88.2567 23.0838 87.5849 23.2511 86.9 23.282C86.3191 23.321 85.7366 23.2271 85.1967 23.0073C84.6568 22.7874 84.1726 22.4474 83.781 22.0124V27.1433H80.6621V12.5795H83.781V13.5553C84.1734 13.1217 84.6576 12.7831 85.1975 12.565C85.7374 12.347 86.32 12.2551 86.9 12.2961C87.5816 12.3272 88.251 12.4934 88.8695 12.7855C89.4881 13.0775 90.0428 13.4896 90.5032 13.9982C90.9636 14.5068 91.3208 15.102 91.5535 15.7497C91.7862 16.3975 91.8894 17.0851 91.8591 17.7733ZM88.7401 17.7733C88.7278 17.286 88.573 16.8131 88.2961 16.4141C88.0183 16.015 87.6308 15.7075 87.181 15.53C86.7304 15.3526 86.2388 15.313 85.7669 15.4164C85.295 15.5198 84.8633 15.7615 84.5274 16.1112C84.1907 16.461 83.9637 16.9032 83.8752 17.3823C83.7867 17.8616 83.84 18.3565 84.0293 18.8052C84.2185 19.2538 84.5339 19.6361 84.9378 19.9043C85.3409 20.1725 85.8136 20.3144 86.297 20.3126C86.628 20.3267 86.9582 20.2701 87.2654 20.1466C87.5734 20.023 87.8512 19.8351 88.0822 19.5953C88.3133 19.3556 88.491 19.0693 88.6041 18.7553C88.7172 18.4414 88.7639 18.1067 88.7401 17.7733Z" />
      <path d="M101.351 19.8517C101.351 22.2441 99.2716 23.2619 97.0677 23.2619C96.1689 23.3435 95.2661 23.1512 94.4763 22.7098C93.6874 22.2683 93.0467 21.5981 92.6387 20.7856L95.321 19.2537C95.4275 19.6281 95.6577 19.9543 95.974 20.1777C96.2902 20.4012 96.672 20.5084 97.057 20.4813C97.7952 20.4813 98.1696 20.2505 98.1696 19.8307C98.1696 18.6871 93.1065 19.2957 93.1065 15.6967C93.1065 13.4302 94.999 12.297 97.1406 12.297C97.955 12.2603 98.7636 12.4466 99.4813 12.8364C100.198 13.2263 100.798 13.8049 101.216 14.511L98.5334 15.938C98.4154 15.6673 98.2212 15.4371 97.9763 15.275C97.7305 15.113 97.4437 15.0262 97.1513 15.0252C96.6105 15.0252 96.2877 15.235 96.2877 15.6022C96.2877 16.7984 101.351 16.0114 101.351 19.8517Z" />
      <path d="M112.652 12.5801V22.9679H109.533V21.992C109.179 22.4239 108.729 22.7658 108.219 22.99C107.711 23.2142 107.156 23.3144 106.601 23.2826C104.522 23.2826 102.744 21.7822 102.744 18.9807V12.5801H105.863V18.5084C105.839 18.7563 105.868 19.0066 105.948 19.242C106.029 19.4774 106.16 19.6923 106.33 19.8718C106.501 20.0514 106.709 20.1914 106.939 20.2821C107.169 20.3728 107.416 20.412 107.661 20.3971C108.785 20.3971 109.574 19.7256 109.574 18.2986V12.5801H112.652Z" />
      <path d="M130.326 16.5882V22.9678H127.207V16.861C127.207 15.8118 126.718 15.1613 125.73 15.1613C124.742 15.1613 124.119 15.8852 124.119 17.1128V22.9678H121V16.861C121 15.8118 120.512 15.1613 119.523 15.1613C118.536 15.1613 117.912 15.8852 117.912 17.1128V22.9678H114.793V12.58H117.912V13.5348C118.235 13.113 118.657 12.779 119.14 12.5628C119.623 12.3466 120.151 12.2552 120.678 12.2967C121.205 12.2689 121.731 12.3801 122.203 12.6192C122.674 12.8584 123.077 13.2173 123.37 13.6608C123.712 13.1974 124.166 12.8294 124.688 12.5908C125.21 12.3522 125.783 12.2511 126.354 12.2967C128.787 12.2967 130.326 13.9965 130.326 16.5882Z" />
      <path d="M14.355 5.07804V0.618652H0.423828V31.2572H14.355V26.7978C11.5013 26.7978 8.7643 25.6537 6.74636 23.617C4.72841 21.5804 3.59474 18.8182 3.59474 15.9379C3.59474 13.0577 4.72841 10.2954 6.74636 8.25885C8.7643 6.2222 11.5013 5.07804 14.355 5.07804Z" />
      <path d="M14.3535 5.07764V26.7974C17.2073 26.7974 19.9443 25.6533 21.9622 23.6166C23.9802 21.5801 25.1138 18.8178 25.1138 15.9375C25.1138 13.0573 23.9802 10.295 21.9622 8.25845C19.9443 6.2218 17.2073 5.07764 14.3535 5.07764Z" />
      <path d="M132.946 12.5174C134.209 12.5174 135.233 11.4839 135.233 10.2091C135.233 8.93414 134.209 7.90063 132.946 7.90063C131.682 7.90063 130.658 8.93414 130.658 10.2091C130.658 11.4839 131.682 12.5174 132.946 12.5174Z" />
    </svg>
  );
};

export default MoonIcon;
