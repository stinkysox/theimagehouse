import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaInstagram } from "react-icons/fa";
import "./LatestWork.css";
import { image } from "framer-motion/client";

// Animation configurations
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      when: "beforeChildren",
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

const initialCategories = {
  Wedding: [
    {
      imageUrl: "https://i.postimg.cc/qMXXP7Nh/DSC05816.jpg",
      category: "Wedding",
    },
    {
      imageUrl: "https://i.postimg.cc/2ynF8kTt/DSC05899.jpg",
      category: "Wedding",
    },
    {
      imageUrl: "https://i.postimg.cc/76GndMzw/DSC05960.jpg",
      category: "Wedding",
    },
    {
      imageUrl: "https://i.postimg.cc/mZ1m5R3C/TIH03861.jpg",
      category: "Wedding",
    },
    {
      imageUrl: "https://i.postimg.cc/3NG94Crn/TIH03872.jpg",
      category: "Wedding",
    },
    {
      imageUrl: "https://i.postimg.cc/1tfvP1kx/TIH03891.jpg",
      category: "Wedding",
    },
    {
      imageUrl: "https://i.postimg.cc/N0GNJHbj/TIH03916.jpg",
      category: "Wedding",
    },
    {
      imageUrl: "https://i.postimg.cc/T3J7J9Vs/TIH03957.jpg",
      category: "Wedding",
    },
    {
      imageUrl: "https://i.postimg.cc/Th8mZz6c/TIH03965.jpg",
      category: "Wedding",
    },
    {
      imageUrl: "https://i.postimg.cc/V6VXFSZp/TIH03976.jpg",
      category: "Wedding",
    },
    {
      imageUrl: "https://i.postimg.cc/GpzFHgFc/TIH04264.jpg",
      category: "Wedding",
    },
    {
      imageUrl: "https://i.postimg.cc/GmFJ1m9T/TIH04530-1.jpg",
      category: "Wedding",
    },
    {
      imageUrl: "https://i.postimg.cc/QxWJ0b3b/TIH04958.jpg",
      category: "Wedding",
    },
    {
      imageUrl: "https://i.postimg.cc/x1Dy7zjS/TIH05522.jpg",
      category: "Wedding",
    },
    {
      imageUrl: "https://i.postimg.cc/Pf7MW7BJ/TIH05642.jpg",
      category: "Wedding",
    },
    {
      imageUrl: "https://i.postimg.cc/6q8fsVGB/TIH05994.jpg",
      category: "Wedding",
    },
    {
      imageUrl: "https://i.postimg.cc/Y0Tft41Y/TIH06562.jpg",
      category: "Wedding",
    },
    {
      imageUrl: "https://i.postimg.cc/63jf1bqH/TIH06763.jpg",
      category: "Wedding",
    },
    {
      imageUrl: "https://i.postimg.cc/TYZC6s9F/TIH07398.jpg",
      category: "Wedding",
    },
    {
      imageUrl: "https://i.postimg.cc/PJ7KNVkL/TIH07426.jpg",
      category: "Wedding",
    },
    {
      imageUrl: "https://i.postimg.cc/sfHTnxZV/TIH07501-Edit.jpg",
      category: "Wedding",
    },
    {
      imageUrl: "https://i.postimg.cc/j22Zx0B0/TIH08085.jpg",
      category: "Wedding",
    },
    {
      imageUrl: "https://i.postimg.cc/sXVTLZc2/TIH08105.jpg",
      category: "Wedding",
    },
    {
      imageUrl: "https://i.postimg.cc/XJQs67Hk/TIH08681.jpg",
      category: "Wedding",
    },
    {
      imageUrl: "https://i.postimg.cc/fR9qSsyM/TIH08709.jpg",
      category: "Wedding",
    },
    {
      imageUrl: "https://i.postimg.cc/YqjskYwG/TIH09959.jpg",
      category: "Wedding",
    },
    {
      imageUrl: "https://i.postimg.cc/mZm50VKW/UDI01085.jpg",
      category: "Wedding",
    },
    {
      imageUrl: "https://i.postimg.cc/VLH2b4FW/UDI02165.jpg",
      category: "Wedding",
    },
    {
      imageUrl: "https://i.postimg.cc/g037Qpbg/UDI06451.jpg",
      category: "Wedding",
    },
    {
      imageUrl: "https://i.postimg.cc/PxzBpj6C/UDI07830.jpg",
      category: "Wedding",
    },
    {
      imageUrl: "https://i.postimg.cc/kGJLWpZf/UDI08990.jpg",
      category: "Wedding",
    },
    {
      imageUrl: "https://i.postimg.cc/zfWmNWKS/UDI09743.jpg",
      category: "Wedding",
    },
    {
      imageUrl: "https://i.postimg.cc/W15m4f6s/MAN8637.jpg",
      category: "Wedding",
    },
    {
      imageUrl: "https://i.postimg.cc/02q0XSy1/MAN8649.jpg",
      category: "Wedding",
    },
    {
      imageUrl: "https://i.postimg.cc/c4p2mhv7/DSC00018.jpg",
      category: "Wedding",
    },
    {
      imageUrl: "https://i.postimg.cc/X7StKxGf/DSC00035.jpg",
      category: "Wedding",
    },
    {
      imageUrl: "https://i.postimg.cc/bwqMWJRd/DSC00037.jpg",
      category: "Wedding",
    },
    {
      imageUrl: "https://i.postimg.cc/4xpMFccD/DSC00038.jpg",
      category: "Wedding",
    },
    {
      imageUrl: "https://i.postimg.cc/ZqRQYM2S/DSC05814.jpg",
      category: "Wedding",
    },
    {
      imageUrl: "https://i.postimg.cc/7h68FL4g/DSC06156.jpg",
      category: "Wedding",
    },
    {
      imageUrl: "https://i.postimg.cc/SKrPmpDV/DSC06198.jpg",
      category: "Wedding",
    },
    {
      imageUrl: "https://i.postimg.cc/MGx4kGbv/TIH00009.jpg",
      category: "Wedding",
    },
    {
      imageUrl: "https://i.postimg.cc/SjFdWZgJ/TIH03897.jpg",
      category: "Wedding",
    },
    {
      imageUrl: "https://i.postimg.cc/tJ7wrmdk/TIH03921.jpg",
      category: "Wedding",
    },
    {
      imageUrl: "https://i.postimg.cc/wTq7B5qV/TIH04001.jpg",
      category: "Wedding",
    },
    {
      imageUrl: "https://i.postimg.cc/Gt0gQh2L/TIH04257.jpg",
      category: "Wedding",
    },
    {
      imageUrl: "https://i.postimg.cc/G3SZBdr5/TIH04269.jpg",
      category: "Wedding",
    },
    {
      imageUrl: "https://i.postimg.cc/k5X064VL/TIH04283.jpg",
      category: "Wedding",
    },
    {
      imageUrl: "https://i.postimg.cc/jdwBPmSd/TIH04306.jpg",
      category: "Wedding",
    },
    {
      imageUrl: "https://i.postimg.cc/BbyyRcM0/TIH04314.jpg",
      category: "Wedding",
    },
    {
      imageUrl: "https://i.postimg.cc/XvHTwbdq/TIH04332.jpg",
      category: "Wedding",
    },
    {
      imageUrl: "https://i.postimg.cc/XYy3NXCL/TIH04365.jpg",
      category: "Wedding",
    },
    {
      imageUrl: "https://i.postimg.cc/BbxYw9Lx/TIH04464.jpg",
      category: "Wedding",
    },
    {
      imageUrl: "https://i.postimg.cc/3wcckZQD/TIH04513.jpg",
      category: "Wedding",
    },
    {
      imageUrl: "https://i.postimg.cc/pXrR7sVg/TIH04979.jpg",
      category: "Wedding",
    },
    {
      imageUrl: "https://i.postimg.cc/DyNnK18m/TIH05375.jpg",
      category: "Wedding",
    },
    {
      imageUrl: "https://i.postimg.cc/ZYy1yXRY/TIH06051.jpg",
      category: "Wedding",
    },
    {
      imageUrl: "https://i.postimg.cc/MpJ3RGLd/TIH06061.jpg",
      category: "Wedding",
    },
    {
      imageUrl: "https://i.postimg.cc/kgZ4wkx1/TIH06148-Edit.jpg",
      category: "Wedding",
    },
    {
      imageUrl: "https://i.postimg.cc/3x75h938/TIH06263.jpg",
      category: "Wedding",
    },
    {
      imageUrl: "https://i.postimg.cc/Gt5wd136/TIH06426-Edit.jpg",
      category: "Wedding",
    },
    {
      imageUrl: "https://i.postimg.cc/HLDmrH0g/TIH06844.jpg",
      category: "Wedding",
    },
    {
      imageUrl: "https://i.postimg.cc/prGxrFCG/TIH07155.jpg",
      category: "Wedding",
    },
    {
      imageUrl: "https://i.postimg.cc/ZqTf7M4N/TIH07171.jpg",
      category: "Wedding",
    },
    {
      imageUrl: "https://i.postimg.cc/Kvf37qqw/TIH07198.jpg",
      category: "Wedding",
    },
    {
      imageUrl: "https://i.postimg.cc/nLBH2MVr/TIH07492.jpg",
      category: "Wedding",
    },
    {
      imageUrl: "https://i.postimg.cc/xjH4dHxc/TIH07992.jpg",
      category: "Wedding",
    },
    {
      imageUrl: "https://i.postimg.cc/261gGK7w/TIH08523.jpg",
      category: "Wedding",
    },
    {
      imageUrl: "https://i.postimg.cc/T1yNj5GH/TIH08643.jpg",
      category: "Wedding",
    },
    {
      imageUrl: "https://i.postimg.cc/RC8DSdLr/TIH08668.jpg",
      category: "Wedding",
    },
    {
      imageUrl: "https://i.postimg.cc/XvfbFhxy/TIH08674.jpg",
      category: "Wedding",
    },
    {
      imageUrl: "https://i.postimg.cc/PfmwJrmt/TIH09114.jpg",
      category: "Wedding",
    },
    {
      imageUrl: "https://i.postimg.cc/bv3mK9wB/TIH09175-Edit.jpg",
      category: "Wedding",
    },
    {
      imageUrl: "https://i.postimg.cc/FRvhBm1Z/TIH09189.jpg",
      category: "Wedding",
    },
    {
      imageUrl: "https://i.postimg.cc/x1q8v0bN/TIH09201.jpg",
      category: "Wedding",
    },
    {
      imageUrl: "https://i.postimg.cc/jSv9bb8c/TIH09304.jpg",
      category: "Wedding",
    },
    {
      imageUrl: "https://i.postimg.cc/ZRX2Mxfh/TIH09954.jpg",
      category: "Wedding",
    },
    {
      imageUrl: "https://i.postimg.cc/qRFj7Bnc/TIH09972.jpg",
      category: "Wedding",
    },
    {
      imageUrl: "https://i.postimg.cc/DyXY8GxS/UDI00922.jpg",
      category: "Wedding",
    },
    {
      imageUrl: "https://i.postimg.cc/nV0n0yx4/UDI00981.jpg",
      category: "Wedding",
    },
    {
      imageUrl: "https://i.postimg.cc/SKMKPDdy/UDI02587.jpg",
      category: "Wedding",
    },
    {
      imageUrl: "https://i.postimg.cc/V64PZCxf/UDI07397.jpg",
      category: "Wedding",
    },
    {
      imageUrl: "https://i.postimg.cc/NFw2DWwq/UDI07422.jpg",
      category: "Wedding",
    },
    {
      imageUrl: "https://i.postimg.cc/xTXVgqtQ/UDI07583.jpg",
      category: "Wedding",
    },
    {
      imageUrl: "https://i.postimg.cc/L8r9jjpG/UDI07592.jpg",
      category: "Wedding",
    },
    {
      imageUrl: "https://i.postimg.cc/85bT836V/UDI09047.jpg",
      category: "Wedding",
    },
    {
      imageUrl: "https://i.postimg.cc/QNbdvBQW/UDI09560.jpg",
      category: "Wedding",
    },
    {
      imageUrl: "https://i.postimg.cc/d1RVs3gp/UDI09915.jpg",
      category: "Wedding",
    },
    {
      imageUrl: "https://i.postimg.cc/HLgGpzHW/WAS04926.jpg",
      category: "Wedding",
    },
    {
      imageUrl: "https://i.postimg.cc/VLXQ22QZ/WAS04938.jpg",
      category: "Wedding",
    },
    {
      imageUrl: "https://i.postimg.cc/9QT55S6N/WAS05572.jpg",
      category: "Wedding",
    },
    {
      imageUrl: "https://i.postimg.cc/hvPcKrLQ/WAS05750.jpg",
      category: "Wedding",
    },
    {
      imageUrl: "https://i.postimg.cc/PxvFY8dV/WAY08169.jpg",
      category: "Wedding",
    },
    {
      imageUrl: "https://i.postimg.cc/02yyv8nX/WAY08178.jpg",
      category: "Wedding",
    },
    {
      imageUrl: "https://i.postimg.cc/vZS1k1dv/WAY08516.jpg",
      category: "Wedding",
    },
  ],

  Engagement: [
    {
      imageUrl: "https://i.postimg.cc/D0JSgBt3/DSC09393.jpg",
      category: "Engagement",
    },
    {
      imageUrl: "https://i.postimg.cc/sDg6VS5d/DSC09416.jpg",
      category: "Engagement",
    },
    {
      imageUrl: "https://i.postimg.cc/Zn2dt1rq/DSC09804.jpg",
      category: "Engagement",
    },
    {
      imageUrl: "https://i.postimg.cc/KzVzRt4q/DSC09995.jpg",
      category: "Engagement",
    },
    {
      imageUrl: "https://i.postimg.cc/Qx7BKYQp/DSC09996.jpg",
      category: "Engagement",
    },
    {
      imageUrl: "https://i.postimg.cc/kgfbF14D/TIH00685.jpg",
      category: "Engagement",
    },
    {
      imageUrl: "https://i.postimg.cc/xjxG3ZNh/TIH00925.jpg",
      category: "Engagement",
    },
    {
      imageUrl: "https://i.postimg.cc/G3V82nyL/TIH01009.jpg",
      category: "Engagement",
    },
    {
      imageUrl: "https://i.postimg.cc/DznbTQb1/TIH01170.jpg",
      category: "Engagement",
    },
    {
      imageUrl: "https://i.postimg.cc/C53z6bgB/TIH01242.jpg",
      category: "Engagement",
    },
    {
      imageUrl: "https://i.postimg.cc/PrV6NxML/TIH01247.jpg",
      category: "Engagement",
    },
    {
      imageUrl: "https://i.postimg.cc/gkLhq2WL/TIH01574.jpg",
      category: "Engagement",
    },
    {
      imageUrl: "https://i.postimg.cc/7Zv2BrHs/TIH01658.jpg",
      category: "Engagement",
    },
    {
      imageUrl: "https://i.postimg.cc/5trQDX8V/TIH01721-2.jpg",
      category: "Engagement",
    },
    {
      imageUrl: "https://i.postimg.cc/yxbF6Jzs/TIH01771.jpg",
      category: "Engagement",
    },
    {
      imageUrl: "https://i.postimg.cc/4NY6L1zd/TIH01779.jpg",
      category: "Engagement",
    },
    {
      imageUrl: "https://i.postimg.cc/5ydYNDPK/TIH02491.jpg",
      category: "Engagement",
    },
    {
      imageUrl: "https://i.postimg.cc/L4ND0Xwy/TIH02514.jpg",
      category: "Engagement",
    },
    {
      imageUrl: "https://i.postimg.cc/4Njzrh51/TIH02694.jpg",
      category: "Engagement",
    },
    {
      imageUrl: "https://i.postimg.cc/k4tRC7yt/TIH02704.jpg",
      category: "Engagement",
    },
    {
      imageUrl: "https://i.postimg.cc/K8LnFvph/TIH02886.jpg",
      category: "Engagement",
    },
    {
      imageUrl: "https://i.postimg.cc/85G4xrTY/TIH03041.jpg",
      category: "Engagement",
    },
    {
      imageUrl: "https://i.postimg.cc/v8kX5mKC/TIH03079.jpg",
      category: "Engagement",
    },
    {
      imageUrl: "https://i.postimg.cc/Hk7txtxK/TIH03119.jpg",
      category: "Engagement",
    },
    {
      imageUrl: "https://i.postimg.cc/dV0zSp5C/TIH03199.jpg",
      category: "Engagement",
    },
    {
      imageUrl: "https://i.postimg.cc/kGnjRRZS/TIH04376.jpg",
      category: "Engagement",
    },
    {
      imageUrl: "https://i.postimg.cc/Z59wNSfw/TIH04483.jpg",
      category: "Engagement",
    },
    {
      imageUrl: "https://i.postimg.cc/nr4ssTgF/TIH05627.jpg",
      category: "Engagement",
    },
    {
      imageUrl: "https://i.postimg.cc/zXh77rZv/TIH05667.jpg",
      category: "Engagement",
    },
    {
      imageUrl: "https://i.postimg.cc/DyNgnN2L/TIH05704.jpg",
      category: "Engagement",
    },
    {
      imageUrl: "https://i.postimg.cc/66yY7ZMd/TIH05739.jpg",
      category: "Engagement",
    },
    {
      imageUrl: "https://i.postimg.cc/tTzkbCT4/TIH06115.jpg",
      category: "Engagement",
    },
    {
      imageUrl: "https://i.postimg.cc/J04qzVDc/TIH06152.jpg",
      category: "Engagement",
    },
    {
      imageUrl: "https://i.postimg.cc/pT19zgcB/TIH06155.jpg",
      category: "Engagement",
    },
    {
      imageUrl: "https://i.postimg.cc/0ydbc6Hj/TIH06176.jpg",
      category: "Engagement",
    },
    {
      imageUrl: "https://i.postimg.cc/NGm2PfM3/TIH08213.jpg",
      category: "Engagement",
    },
    {
      imageUrl: "https://i.postimg.cc/hGD0KQJQ/TIH08433.jpg",
      category: "Engagement",
    },
    {
      imageUrl: "https://i.postimg.cc/X7qLMW0n/TIH08445.jpg",
      category: "Engagement",
    },
    {
      imageUrl: "https://i.postimg.cc/mk8mY2f5/TIH08460.jpg",
      category: "Engagement",
    },
    {
      imageUrl: "https://i.postimg.cc/Tw2mrjdT/TIH08471.jpg",
      category: "Engagement",
    },
    {
      imageUrl: "https://i.postimg.cc/s247QHRn/TIH08484-2.jpg",
      category: "Engagement",
    },
    {
      imageUrl: "https://i.postimg.cc/LsK3ZZgs/TIH09443.jpg",
      category: "Engagement",
    },
    {
      imageUrl: "https://i.postimg.cc/rsn9dn56/TIH09786.jpg",
      category: "Engagement",
    },
    {
      imageUrl: "https://i.postimg.cc/76q1K8V8/TIH09805.jpg",
      category: "Engagement",
    },
    {
      imageUrl: "https://i.postimg.cc/ryJZXg0N/TIH09862.jpg",
      category: "Engagement",
    },
    {
      imageUrl: "https://i.postimg.cc/zXNHmZHV/UDI06574.jpg",
      category: "Engagement",
    },
    {
      imageUrl: "https://i.postimg.cc/tT7JqBRn/UDI06613.jpg",
      category: "Engagement",
    },
    {
      imageUrl: "https://i.postimg.cc/mgNwxyrG/UDI07805.jpg",
      category: "Engagement",
    },
    {
      imageUrl: "https://i.postimg.cc/FK40K5wd/UDI07860.jpg",
      category: "Engagement",
    },
    {
      imageUrl: "https://i.postimg.cc/pdsJrV8G/UDI07864.jpg",
      category: "Engagement",
    },
    {
      imageUrl: "https://i.postimg.cc/d1XRRW5G/UDI08943.jpg",
      category: "Engagement",
    },
    {
      imageUrl: "https://i.postimg.cc/tCGWXnwR/UDI09034.jpg",
      category: "Engagement",
    },
    {
      imageUrl: "https://i.postimg.cc/sfh5d4n0/UDI09094.jpg",
      category: "Engagement",
    },
    {
      imageUrl: "https://i.postimg.cc/vBXrjqq1/UDI09332.jpg",
      category: "Engagement",
    },
    {
      imageUrl: "https://i.postimg.cc/Z0z5LZ86/UDI09673.jpg",
      category: "Engagement",
    },
    {
      imageUrl: "https://i.postimg.cc/8CzL283h/MAN6121.jpg",
      category: "Engagement",
    },
    {
      imageUrl: "https://i.postimg.cc/7h63y3dK/MAN6888.jpg",
      category: "Engagement",
    },
    {
      imageUrl: "https://i.postimg.cc/Fsbc1sXy/MAN6905.jpg",
      category: "Engagement",
    },
  ],

  PreWedding: [
    {
      imageUrl: "https://i.postimg.cc/9z52ZpdM/DJI-0035.jpg",
      category: "PreWedding",
    },
    {
      imageUrl: "https://i.postimg.cc/RV7hG6N8/DJI-0074.jpg",
      category: "PreWedding",
    },
    {
      imageUrl: "https://i.postimg.cc/857sbZ6B/DJI-0158.jpg",
      category: "PreWedding",
    },
    {
      imageUrl: "https://i.postimg.cc/TYwg4cvS/DJI-0192.jpg",
      category: "PreWedding",
    },
    {
      imageUrl: "https://i.postimg.cc/y6hLHj58/DJI-0234.jpg",
      category: "PreWedding",
    },
    {
      imageUrl: "https://i.postimg.cc/DfcPDZJW/DJI-0270.jpg",
      category: "PreWedding",
    },
    {
      imageUrl: "https://i.postimg.cc/4NZF7qtc/TIH00283.jpg",
      category: "PreWedding",
    },
    {
      imageUrl: "https://i.postimg.cc/qvDmF7Fc/TIH00404.jpg",
      category: "PreWedding",
    },
    {
      imageUrl: "https://i.postimg.cc/wj9vrqNB/TIH00434.jpg",
      category: "PreWedding",
    },
    {
      imageUrl: "https://i.postimg.cc/KvqV6Qkg/TIH00546.jpg",
      category: "PreWedding",
    },
    {
      imageUrl: "https://i.postimg.cc/NFhGkBYB/TIH00640.jpg",
      category: "PreWedding",
    },
    {
      imageUrl: "https://i.postimg.cc/HnQYSRs5/TIH00730.jpg",
      category: "PreWedding",
    },
    {
      imageUrl: "https://i.postimg.cc/KYLn5vh8/TIH00754.jpg",
      category: "PreWedding",
    },
    {
      imageUrl: "https://i.postimg.cc/NfpbyMQh/TIH00818.jpg",
      category: "PreWedding",
    },
    {
      imageUrl: "https://i.postimg.cc/gjdF0JmX/TIH00864.jpg",
      category: "PreWedding",
    },
    {
      imageUrl: "https://i.postimg.cc/C17nvRPS/TIH01493.jpg",
      category: "PreWedding",
    },
    {
      imageUrl: "https://i.postimg.cc/j2C2ZZn4/TIH01662.jpg",
      category: "PreWedding",
    },
    {
      imageUrl: "https://i.postimg.cc/NMmpLkjb/TIH01792.jpg",
      category: "PreWedding",
    },
    {
      imageUrl: "https://i.postimg.cc/cJMvHKNw/TIH01906.jpg",
      category: "PreWedding",
    },
    {
      imageUrl: "https://i.postimg.cc/6QDM9mty/TIH01939.jpg",
      category: "PreWedding",
    },
    {
      imageUrl: "https://i.postimg.cc/YCXpy1kX/TIH02278.jpg",
      category: "PreWedding",
    },
    {
      imageUrl: "https://i.postimg.cc/FHbrb2nQ/TIH02397.jpg",
      category: "PreWedding",
    },
    {
      imageUrl: "https://i.postimg.cc/tg7cR66m/TIH02417.jpg",
      category: "PreWedding",
    },
    {
      imageUrl: "https://i.postimg.cc/bYbwNDHJ/TIH02425.jpg",
      category: "PreWedding",
    },
    {
      imageUrl: "https://i.postimg.cc/x1jfRsrJ/TIH02456.jpg",
      category: "PreWedding",
    },
    {
      imageUrl: "https://i.postimg.cc/vHcxzHWw/TIH02633.jpg",
      category: "PreWedding",
    },
    {
      imageUrl: "https://i.postimg.cc/LsqyFpdc/TIH02644.jpg",
      category: "PreWedding",
    },
    {
      imageUrl: "https://i.postimg.cc/9QNhBCtK/TIH02650.jpg",
      category: "PreWedding",
    },
    {
      imageUrl: "https://i.postimg.cc/Jh6GJfGz/TIH02654.jpg",
      category: "PreWedding",
    },
    {
      imageUrl: "https://i.postimg.cc/k4WP983P/TIH02731-Edit.jpg",
      category: "PreWedding",
    },
    {
      imageUrl: "https://i.postimg.cc/c1fbJ0KZ/TIH02796-Edit.jpg",
      category: "PreWedding",
    },
    {
      imageUrl: "https://i.postimg.cc/ydZrczvm/TIH02836.jpg",
      category: "PreWedding",
    },
    {
      imageUrl: "https://i.postimg.cc/pd86nH0D/TIH02893.jpg",
      category: "PreWedding",
    },
    {
      imageUrl: "https://i.postimg.cc/k5BnrBg7/TIH02902.jpg",
      category: "PreWedding",
    },
    {
      imageUrl: "https://i.postimg.cc/T2S3TjWB/TIH02923.jpg",
      category: "PreWedding",
    },
    {
      imageUrl: "https://i.postimg.cc/vT8qj6Gz/TIH02984.jpg",
      category: "PreWedding",
    },
    {
      imageUrl: "https://i.postimg.cc/HkN22hJB/TIH03077.jpg",
      category: "PreWedding",
    },
    {
      imageUrl: "https://i.postimg.cc/PJdzJGcr/TIH03118.jpg",
      category: "PreWedding",
    },
    {
      imageUrl: "https://i.postimg.cc/GpccXqZT/TIH03199.jpg",
      category: "PreWedding",
    },
    {
      imageUrl: "https://i.postimg.cc/J0RvL25j/TIH03282.jpg",
      category: "PreWedding",
    },
    {
      imageUrl: "https://i.postimg.cc/MTHzSXZW/TIH03302.jpg",
      category: "PreWedding",
    },
    {
      imageUrl: "https://i.postimg.cc/5y57KScj/TIH03306.jpg",
      category: "PreWedding",
    },
    {
      imageUrl: "https://i.postimg.cc/qBGWLppw/TIH03647.jpg",
      category: "PreWedding",
    },
    {
      imageUrl: "https://i.postimg.cc/XNx9Lzmd/TIH04266.jpg",
      category: "PreWedding",
    },
    {
      imageUrl: "https://i.postimg.cc/zvMBMKnZ/TIH04298.jpg",
      category: "PreWedding",
    },
    {
      imageUrl: "https://i.postimg.cc/WbnYM86H/TIH04328.jpg",
      category: "PreWedding",
    },
    {
      imageUrl: "https://i.postimg.cc/qRWqD2cf/TIH04340.jpg",
      category: "PreWedding",
    },
    {
      imageUrl: "https://i.postimg.cc/BbD6rtNj/TIH04372.jpg",
      category: "PreWedding",
    },
    {
      imageUrl: "https://i.postimg.cc/Fznd42X6/TIH04535.jpg",
      category: "PreWedding",
    },
    {
      imageUrl: "https://i.postimg.cc/rsCTG4QN/TIH04549.jpg",
      category: "PreWedding",
    },
    {
      imageUrl: "https://i.postimg.cc/XJkdTHJM/TIH04573.jpg",
      category: "PreWedding",
    },
    {
      imageUrl: "https://i.postimg.cc/9M9CMK9S/TIH04595.jpg",
      category: "PreWedding",
    },
    {
      imageUrl: "https://i.postimg.cc/d3Qrv2kh/TIH04667.jpg",
      category: "PreWedding",
    },
    {
      imageUrl: "https://i.postimg.cc/J4L4yrPQ/TIH04684.jpg",
      category: "PreWedding",
    },
    {
      imageUrl: "https://i.postimg.cc/Xqy3rhym/TIH04700.jpg",
      category: "PreWedding",
    },
    {
      imageUrl: "https://i.postimg.cc/Jzs3G5TJ/TIH04729-Edit.jpg",
      category: "PreWedding",
    },
    {
      imageUrl: "https://i.postimg.cc/gJm6qVKg/TIH04773-Edit.jpg",
      category: "PreWedding",
    },
    {
      imageUrl: "https://i.postimg.cc/ZKRsx37Y/TIH04823-Edit-2.jpg",
      category: "PreWedding",
    },
    {
      imageUrl: "https://i.postimg.cc/SK3mmknC/TIH04827-Edit.jpg",
      category: "PreWedding",
    },
    {
      imageUrl: "https://i.postimg.cc/x8sxSTCS/TIH04922.jpg",
      category: "PreWedding",
    },
    {
      imageUrl: "https://i.postimg.cc/Zn9YrnXf/TIH04951.jpg",
      category: "PreWedding",
    },
    {
      imageUrl: "https://i.postimg.cc/BQQk7R60/TIH04978.jpg",
      category: "PreWedding",
    },
    {
      imageUrl: "https://i.postimg.cc/vmH44Y8K/TIH04987.jpg",
      category: "PreWedding",
    },
    {
      imageUrl: "https://i.postimg.cc/13FgkCCW/TIH05002.jpg",
      category: "PreWedding",
    },
    {
      imageUrl: "https://i.postimg.cc/FsBWWR8y/TIH05161.jpg",
      category: "PreWedding",
    },
    {
      imageUrl: "https://i.postimg.cc/fTptgnKt/TIH05174.jpg",
      category: "PreWedding",
    },
    {
      imageUrl: "https://i.postimg.cc/76Kb3phL/TIH05205.jpg",
      category: "PreWedding",
    },
    {
      imageUrl: "https://i.postimg.cc/Z5nH6SqW/TIH05266.jpg",
      category: "PreWedding",
    },
    {
      imageUrl: "https://i.postimg.cc/sgbLXXJj/TIH05356.jpg",
      category: "PreWedding",
    },
    {
      imageUrl: "https://i.postimg.cc/jq8JPJnh/TIH05368.jpg",
      category: "PreWedding",
    },
    {
      imageUrl: "https://i.postimg.cc/SQzJ2tqm/TIH05381.jpg",
      category: "PreWedding",
    },
    {
      imageUrl: "https://i.postimg.cc/prBCJV8F/TIH05393.jpg",
      category: "PreWedding",
    },
    {
      imageUrl: "https://i.postimg.cc/MKPb6FYq/TIH05458.jpg",
      category: "PreWedding",
    },
    {
      imageUrl: "https://i.postimg.cc/8khTV8Nf/TIH05878.jpg",
      category: "PreWedding",
    },
    {
      imageUrl: "https://i.postimg.cc/MTS132zb/TIH05896.jpg",
      category: "PreWedding",
    },
    {
      imageUrl: "https://i.postimg.cc/G2CSF5N6/TIH05914.jpg",
      category: "PreWedding",
    },
    {
      imageUrl: "https://i.postimg.cc/QxX0x5Gk/TIH05947.jpg",
      category: "PreWedding",
    },
    {
      imageUrl: "https://i.postimg.cc/D03pcYMt/TIH05967.jpg",
      category: "PreWedding",
    },
    {
      imageUrl: "https://i.postimg.cc/NfkGm3nv/TIH05990.jpg",
      category: "PreWedding",
    },
    {
      imageUrl: "https://i.postimg.cc/hvqg7sbG/TIH06137.jpg",
      category: "PreWedding",
    },
    {
      imageUrl: "https://i.postimg.cc/g2LMfpbf/TIH06173.jpg",
      category: "PreWedding",
    },
    {
      imageUrl: "https://i.postimg.cc/c400xDL9/TIH08776.jpg",
      category: "PreWedding",
    },
    {
      imageUrl: "https://i.postimg.cc/fTnkxjTm/TIH08783.jpg",
      category: "PreWedding",
    },
    {
      imageUrl: "https://i.postimg.cc/sXjvZVV8/TIH08982.jpg",
      category: "PreWedding",
    },
    {
      imageUrl: "https://i.postimg.cc/7hpHXDkq/TIH09018.jpg",
      category: "PreWedding",
    },
    {
      imageUrl: "https://i.postimg.cc/mrDrbm8f/TIH09045-Edit.jpg",
      category: "PreWedding",
    },
    {
      imageUrl: "https://i.postimg.cc/xCDPrN3m/TIH09067.jpg",
      category: "PreWedding",
    },
    {
      imageUrl: "https://i.postimg.cc/k5xTgy4s/TIH09145.jpg",
      category: "PreWedding",
    },
    {
      imageUrl: "https://i.postimg.cc/hGzqy62j/TIH09148.jpg",
      category: "PreWedding",
    },
    {
      imageUrl: "https://i.postimg.cc/j543ZhY2/TIH09251.jpg",
      category: "PreWedding",
    },
    {
      imageUrl: "https://i.postimg.cc/133CMFv5/TIH09459.jpg",
      category: "PreWedding",
    },
    {
      imageUrl: "https://i.postimg.cc/jShWqwTN/TIH09468.jpg",
      category: "PreWedding",
    },
    {
      imageUrl: "https://i.postimg.cc/BQKQb8Tb/TIH09631.jpg",
      category: "PreWedding",
    },
    {
      imageUrl: "https://i.postimg.cc/d0xVDGx7/TIH09666.jpg",
      category: "PreWedding",
    },
    {
      imageUrl: "https://i.postimg.cc/4xR49JP5/TIH09682.jpg",
      category: "PreWedding",
    },
    {
      imageUrl: "https://i.postimg.cc/6345ZTkM/TIH09767.jpg",
      category: "PreWedding",
    },
  ],

  Haldi: [
    {
      imageUrl: "https://i.postimg.cc/W3mrZWLW/0J9A9687.jpg",
      category: "Haldi",
    },
    {
      imageUrl: "https://i.postimg.cc/XYTyzSn1/0J9A9725.jpg",
      category: "Haldi",
    },
    {
      imageUrl: "https://i.postimg.cc/Hxm8TwcQ/DSC08750.jpg",
      category: "Haldi",
    },
    {
      imageUrl: "https://i.postimg.cc/YCS3HHKp/DSC08811.jpg",
      category: "Haldi",
    },
    {
      imageUrl: "https://i.postimg.cc/rm90sDx7/ESH08513.jpg",
      category: "Haldi",
    },
    {
      imageUrl: "https://i.postimg.cc/BbQ8KJCb/ESH08628.jpg",
      category: "Haldi",
    },
    {
      imageUrl: "https://i.postimg.cc/zXxCpcL4/ESH08690.jpg",
      category: "Haldi",
    },
    {
      imageUrl: "https://i.postimg.cc/rm5GJyW9/PYM-8724.jpg",
      category: "Haldi",
    },
    {
      imageUrl: "https://i.postimg.cc/jS9zYn4X/TIH01786.jpg",
      category: "Haldi",
    },
    {
      imageUrl: "https://i.postimg.cc/T1GVH8Jv/TIH02048.jpg",
      category: "Haldi",
    },
    {
      imageUrl: "https://i.postimg.cc/m2jwJrnX/TIH02087.jpg",
      category: "Haldi",
    },
    {
      imageUrl: "https://i.postimg.cc/PfzzvxdX/TIH02140.jpg",
      category: "Haldi",
    },
    {
      imageUrl: "https://i.postimg.cc/BQS5T0vx/TIH03988.jpg",
      category: "Haldi",
    },
    {
      imageUrl: "https://i.postimg.cc/jqXPdFhC/TIH04012.jpg",
      category: "Haldi",
    },
    {
      imageUrl: "https://i.postimg.cc/13YKRjsD/TIH04053.jpg",
      category: "Haldi",
    },
    {
      imageUrl: "https://i.postimg.cc/BvK2SZhG/TIH04279.jpg",
      category: "Haldi",
    },
    {
      imageUrl: "https://i.postimg.cc/hvyX8NCr/TIH04285.jpg",
      category: "Haldi",
    },
    {
      imageUrl: "https://i.postimg.cc/SKB7CYXs/TIH04506.jpg",
      category: "Haldi",
    },
    {
      imageUrl: "https://i.postimg.cc/kGfb125W/TIH05525.jpg",
      category: "Haldi",
    },
    {
      imageUrl: "https://i.postimg.cc/m2p971Js/TIH05808.jpg",
      category: "Haldi",
    },
    {
      imageUrl: "https://i.postimg.cc/Z59dHKzy/TIH05900.jpg",
      category: "Haldi",
    },
    {
      imageUrl: "https://i.postimg.cc/66Y4NG9v/TIH05942.jpg",
      category: "Haldi",
    },
    {
      imageUrl: "https://i.postimg.cc/ydCckq53/TIH05982.jpg",
      category: "Haldi",
    },
    {
      imageUrl: "https://i.postimg.cc/Kvjkcvzs/TIH06050.jpg",
      category: "Haldi",
    },
    {
      imageUrl: "https://i.postimg.cc/XvdyMHJj/TIH06428.jpg",
      category: "Haldi",
    },
    {
      imageUrl: "https://i.postimg.cc/tJX6N39X/TIH07092.jpg",
      category: "Haldi",
    },
    {
      imageUrl: "https://i.postimg.cc/3xWgqFmN/TIH07249.jpg",
      category: "Haldi",
    },
    {
      imageUrl: "https://i.postimg.cc/c4zKvyt1/TIH07254.jpg",
      category: "Haldi",
    },
  ],

  Sangeeth: [
    {
      imageUrl: "https://i.postimg.cc/T3KMkBPs/TIH01896.jpg",
      category: "Sangeeth",
    },
    {
      imageUrl: "https://i.postimg.cc/qvWfWQhv/TIH01908.jpg",
      category: "Sangeeth",
    },
    {
      imageUrl: "https://i.postimg.cc/prcczXKL/TIH02049.jpg",
      category: "Sangeeth",
    },
    {
      imageUrl: "https://i.postimg.cc/h47qbkf3/PYM-8386.jpg",
      category: "Sangeeth",
    },
    {
      imageUrl: "https://i.postimg.cc/tTKwMgYv/TIH01590.jpg",
      category: "Sangeeth",
    },
    {
      imageUrl: "https://i.postimg.cc/Bvwd2ps0/TIH01823-Edit.jpg",
      category: "Sangeeth",
    },
    {
      imageUrl: "https://i.postimg.cc/MZBhj1FC/TIH02008.jpg",
      category: "Sangeeth",
    },
  ],
};

const LatestWork = () => {
  const categoryKeys = Object.keys(initialCategories);
  const [activeCategory, setActiveCategory] = useState(categoryKeys[0] || "");
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="latest-work">
      <h2>Our Latest Work</h2>

      <div className="category-buttons">
        {categoryKeys.map((category) => (
          <button
            key={category}
            className={category === activeCategory ? "active" : ""}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          className="image-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          key={activeCategory}
        >
          {initialCategories[activeCategory] &&
          initialCategories[activeCategory].length > 0 ? (
            initialCategories[activeCategory].map((imageObj, index) => (
              <motion.div
                key={`${activeCategory}-${index}`}
                variants={itemVariants}
                style={{ overflow: "hidden" }}
              >
                <img
                  src={imageObj.imageUrl}
                  alt={`${activeCategory} photo ${index + 1}`}
                  className="gallery-img"
                  onClick={() => setSelectedImage(imageObj.imageUrl)}
                />
              </motion.div>
            ))
          ) : (
            <motion.div
              className="empty-images"
              key="empty"
              variants={itemVariants}
            >
              <p className="no-images">No images available in this category.</p>
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="modal"
            onClick={() => setSelectedImage(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.img
              src={selectedImage}
              alt="Enlarged view"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
              className="modal-image"
            />
            <button
              className="modal-close-btn"
              onClick={() => setSelectedImage(null)}
            >
              Close
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="instagram-icon">
        <a
          href="https://www.instagram.com/pramod.photogrphy/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram size={30} />
        </a>
      </div>
    </div>
  );
};

export default LatestWork;
