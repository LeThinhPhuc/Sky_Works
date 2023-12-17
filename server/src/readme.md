This is a sample Node.js code that uses the express, body-parser, cors, and mongoose modules to create a REST API for a job listing website.

The code sets up the middleware for parsing request bodies using JSON and enabling CORS. It then connects to a MongoDB database using the mongoose module, and defines routes for retrieving and adding job listings and applicants using the express module.

When a GET request is received at /jobs, it queries the database for all job listings using the Job model, and returns them as a JSON response. If no jobs are found, it returns a 404 error.

When a POST request is received at /jobs, it creates a new job listing with the provided name, requirements, and description, and saves it to the database using the Job model. If an error occurs during saving, it returns a 500 error.

Similarly, when a GET request is received at /applicants, it queries the database for all applicants using the Applicant model, and returns them as a JSON response. If no applicants are found, it returns a 404 error.

When a POST request is received at /applicants, it creates a new applicant with the provided name, email, phone, date of birth, and resume link, and saves it to the database using the Applicant model. If an error occurs during saving, it returns a 500 error.

Finally, the code starts the server and listens on port 3000 for incoming requests.

/*


Trang Career: 

- Header & Footer: (Luân)

- Danh sách các job đang tuyển & Filter Job:
  + FE: Mock data, và hiển thị các job đang tuyển: (Phúc)
  + BE: Lấy data từ DB trả về cho FE: (Khang)

- Job Detail:
  + FE: Mock data, và hiển thị chi tiết job: (anh TTài)

- Trang Apply Job:
  + FE:  Ngọc
  + BE: api upload thông tin cv:


  Database
  - Jobs: 
    id: uuid, 
    title: string, 
    location: string, 
    type: string, 
    tags: [] string,, 
    created_at: timestamp, 
    updated_at: timestamp, 
    available: boolean,
    descriptions: [
      {
        title: "Mô tả công việc",
        description: "Mô tả công việc"
      }
    ]
    requirements: [] string
*/

/*
    if(login) {
      if(pasword !== "User" && email !== "Admin") {
         return;
      }
      const { email, password } = req.body;
    } else {
     const { email, password } = req.body;
    }
*/