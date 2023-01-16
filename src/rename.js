let names = ['Prerna Dipak Patil ', 'Sagar shome', 'Aditya Raj ', 'Supratim Ray Chaudhury ', 'Arth singh', 'PUSHPANSHU RAJ', 'Ruhan Das', 'Tushar Singh ', 'Anshul Tapase', 'Sunny Kumar ', 'Uday Debnath ', 'Vijeta Priya', 'Subodh Kant ', 'DEVAYAN DAS', 'Suraj Verma', 'Dheeraj Kumar ', 'Debatanu Datta ', 'Edan Solomon Tuti ', 'RAJ NAYAN ', 'Cheela Lasya', 'Hammad Kidwai', 'Arpit Utkarsh', 'Desh Deepak Kant', 'R.Kaushikan ', 'Utsav Kumar', 'sudip karmakar', 'Shashidhar Roy', 'Nehal Srivastava', 'Ansh gupta', 'Vikash choubey', 'Omisha Bajoria ', 'Samrat Bhattacharya', 'Piyush Kumar Singh', 'ANUJ KUMAR VERMA ', 'Shivam Shekhar Soy', 'Saptadipa Datta ', 'Diksha singh ', 'Aindrela Saha ', 'Leela Lakshmi Kundi', 'Supratik Datta ', 'Payal Singh', 'khushi garodia', 'Tanvi Singh ', 'Abhijit Rudra Paul ', 'Laisa Debbarma', 'Saptadeepa Roy Choudhury', 'Ganesh', 'VANGALA AKSHAYA ', 'Harshad Sangale', 'Sachin', 'Bhola Paul', 'VINIT KUMAR', 'Saumya Chandra ', 'khumjar debbarma', 'Nakka Aparnaa', 'Bigsha Debbarma', 'Rohan', 'Koushik Roy ', 'Puja Rani Dutta ', 'Sandipan Saha ', 'Chirag DebBarma', 'Vedant Chainani ', 'TITAS MAJUMDER', 'Mallipeddi Likhitha ', 'Aditya pandey', 'Anuj singh', 'KARTHIK B T ', 'SHREYA VERMA ', 'Raj Aryan Chauhan ', 'Dishank Patil ', 'Abhishek Ugale ', 'Shiv Shakti ', 'ARSHIT CHAURASIA', 'Siddhant Raj', 'Margan Das ', 'BARSHA SHIT', 'NILANJAN PAUL', 'Siddhanth Sethi', 'aditi kumari', 'Lakshay Riyar ', 'Ghanshyam kumar ', 'Upayan Bhattacharyya', 'Premanshu Kashyap ', 'ANKESH KUMAR', 'Raman Pandey', 'Gautam Kumar', 'Arman Debbarma', 'SOUVIK KHANRA', 'Dhritiman Roy', 'Swarup pal ', 'Amartya Dandapat', 'Saurabh kumar', 'Adison Tripura ', 'HRITADIP DATTA ', 'Anish kumar', 'Amrita Chel ', 'Fokaz M Chakma', 'Abhishek Kumar Rajak ', 'Aditya Anupam ', 'Parthib Deb', 'Saumyadip Deb', 'MAYANK MOHAPATRA ', 'Samadrita Bhaumik', 'Sheel Ganvir', 'Arkyajit Bhattacharjee', 'U.Raghu Vamshi Reddy', 'Vadali.V.S.K.V.Anvitha', 'Aditya singh', 'Rudraneel Bhattacharyya', 'Nagalla Satish', 'Debajyoti Debnath', 'aradhya kumari', 'Sheilika Das ', 'Soumyaditya Chakraborty ', 'SURAJ Singh ', 'Vedant Vaidya', 'Rohan Kumar Singh ', 'Srinkha Das', 'Aatish Kumar', 'Ayush Deb ', 'Ankit Kumar ', 'Barosa Debbarma', 'AMAN KUMAR', 'Soumyadip Biswas', 'ajay sethi', 'Agniva Das', 'ADITYA TAPADAR', 'Rupesh verma', 'Gennady korotkevich ', 'Prathamesh Shitre ', 'Tamanna Das Talukdar ', 'Keshav Agrawal', 'Sahil Raj ', 'Austin Paul', 'Aditya Raj', 'SUYASH Mishra ', 'Satyendra Jangid', 'Rajneesh Kumar ', 'praveen kumar', 'Shikha Rai', 'Monojit Tewari', 'RAHUL YADAV ', 'Manish kumar', 'Yashpal Katiyar', 'Abhradip Saha', 'Vidya Sagar ', 'Gourab Singha', 'Satwik Gupta ', 'Anjali Singh', 'Sadhana Sharma', 'Mohit Kumar Pal ', 'Chandan Dey ', 'Tanmoy Sarkar ', 'Debajyoti Das', 'Antara Das', 'Jahnavi Kumari', 'Ritika Semwal', 'Abhishek Verma', 'Deepanshi', 'Amit Kumar', 'Angira Das ', 'Riya gupta', 'Prajna Paul', 'Pranjal Kumar ', 'Nimesh Kumar ', 'SHUBHAJIT RANA', 'Ankit Patnaik ', 'Debsourya Datta', 'Muskan gupta', 'Deepak Kumar ', 'Akshat Awasthi ', 'Ashutosh Kumar ', 'Adarsh pal', 'Pratham Jha', 'Arkajit Karmakar', 'Sushant bhau', 'Porandla Ravalika ', 'Harsh Agarwal', 'Akshay Viswanathan', 'Aryaman Singh', 'Aditya Raj', 'ANUJ KUMAR', 'Aryan Chakma', 'Alok kumar', 'Adarshika ', 'MANISH KUMAR', 'Mishan Singh ', 'Geddam Abhiram Tarun', 'Yuvraj Chowhan', 'Priyanshu Kumar Jha ', 'Suraj Yadav', 'BIPIN KUMAR', 'Debanshu Ranjan Mohanty ', 'Debanshu Ranjan Mohanty', 'Vineet Kashyap ', 'Biprajit Paul', 'Ishita Karmakar', 'Abhiraj kumar jha ', 'Biplab Datta', 'Pravesh kumar', 'AMBIKA KUMAR', 'Gourav Majumder', 'Hanshika ', 'Ravishankar Tiwari ', 'Nikhil gupta', 'HIMANSHU SACHAN',]

const fs = require("fs").promises;
for (let i = 0; i < 6; i++) {
      let newFileName = `${names[200 + i]}.PNG`;
      let currentFileName = `TITANS2 (${i}).png`;
      fs.rename(currentFileName, newFileName)
            .then(() => {
                  console.log(`${currentFileName} was renamed to ${newFileName}`);
            })
            .catch((err) => {
                  console.error(err);
            });
}
