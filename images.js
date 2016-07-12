//Images for Cards
var imageArray = new Array();
imageArray[0] = "/~jushughe/FinalProject/images/cards/ac.jpg";
imageArray[1] = "/~jushughe/FinalProject/images/cards/2c.jpg";
imageArray[2] = "/~jushughe/FinalProject/images/cards/3c.jpg";
imageArray[3] = "/~jushughe/FinalProject/images/cards/4c.jpg";
imageArray[4] = "/~jushughe/FinalProject/images/cards/5c.jpg";
imageArray[5] = "/~jushughe/FinalProject/images/cards/6c.jpg";
imageArray[6] = "/~jushughe/FinalProject/images/cards/7c.jpg";
imageArray[7] = "/~jushughe/FinalProject/images/cards/8c.jpg";
imageArray[8] = "/~jushughe/FinalProject/images/cards/9c.jpg";
imageArray[9] = "/~jushughe/FinalProject/images/cards/10c.jpg";
imageArray[10] = "/~jushughe/FinalProject/images/cards/jc.jpg";
imageArray[11] = "/~jushughe/FinalProject/images/cards/qc.jpg";
imageArray[12] = "/~jushughe/FinalProject/images/cards/kc.jpg";
imageArray[13] = "/~jushughe/FinalProject/images/cards/da.jpg";
imageArray[14] = "/~jushughe/FinalProject/images/cards/d2.jpg";
imageArray[15] = "/~jushughe/FinalProject/images/cards/d3.jpg";
imageArray[16] = "/~jushughe/FinalProject/images/cards/d4.jpg";
imageArray[17] = "/~jushughe/FinalProject/images/cards/d5.jpg";
imageArray[18] = "/~jushughe/FinalProject/images/cards/d6.jpg";
imageArray[19] = "/~jushughe/FinalProject/images/cards/d7.jpg";
imageArray[20] = "/~jushughe/FinalProject/images/cards/d8.jpg";
imageArray[21] = "/~jushughe/FinalProject/images/cards/d9.jpg";
imageArray[22] = "/~jushughe/FinalProject/images/cards/d10.jpg";
imageArray[23] = "/~jushughe/FinalProject/images/cards/dj.jpg";
imageArray[24] = "/~jushughe/FinalProject/images/cards/dq.jpg";
imageArray[25] = "/~jushughe/FinalProject/images/cards/dk.jpg";
imageArray[26] = "/~jushughe/FinalProject/images/cards/ha.jpg";
imageArray[27] = "/~jushughe/FinalProject/images/cards/h2.jpg";
imageArray[28] = "/~jushughe/FinalProject/images/cards/h3.jpg";
imageArray[29] = "/~jushughe/FinalProject/images/cards/h4.jpg";
imageArray[30] = "/~jushughe/FinalProject/images/cards/h5.jpg";
imageArray[31] = "/~jushughe/FinalProject/images/cards/h6.jpg";
imageArray[32] = "/~jushughe/FinalProject/images/cards/h7.jpg";
imageArray[33] = "/~jushughe/FinalProject/images/cards/h8.jpg";
imageArray[34] = "/~jushughe/FinalProject/images/cards/h9.jpg";
imageArray[35] = "/~jushughe/FinalProject/images/cards/h10.jpg";
imageArray[36] = "/~jushughe/FinalProject/images/cards/hj.jpg";
imageArray[37] = "/~jushughe/FinalProject/images/cards/hq.jpg";
imageArray[38] = "/~jushughe/FinalProject/images/cards/hk.jpg";
imageArray[39] = "/~jushughe/FinalProject/images/cards/sa.jpg";
imageArray[40] = "/~jushughe/FinalProject/images/cards/s2.jpg";
imageArray[41] = "/~jushughe/FinalProject/images/cards/s3.jpg";
imageArray[42] = "/~jushughe/FinalProject/images/cards/s4.jpg";
imageArray[43] = "/~jushughe/FinalProject/images/cards/s5.jpg";
imageArray[44] = "/~jushughe/FinalProject/images/cards/s6.jpg";
imageArray[45] = "/~jushughe/FinalProject/images/cards/s7.jpg";
imageArray[46] = "/~jushughe/FinalProject/images/cards/s8.jpg";
imageArray[47] = "/~jushughe/FinalProject/images/cards/s9.jpg";
imageArray[48] = "/~jushughe/FinalProject/images/cards/s10.jpg";
imageArray[49] = "/~jushughe/FinalProject/images/cards/sj.jpg";
imageArray[50] = "/~jushughe/FinalProject/images/cards/sq.jpg";
imageArray[51] = "/~jushughe/FinalProject/images/cards/sk.jpg";

//pre load card images
function preloadImages(imageArray){
    
    for(var i = 0; i < imageArray.length; i++ ) 
    {
        var imageObject = new Image();
        imageObject.src = imageArray[i];
    }
}
