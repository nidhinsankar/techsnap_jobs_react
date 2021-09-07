import React from "react";

const JobsList = () => {
  const JobsList = [
    {
      role: "Frontend Developer Intern",
      reqID: "00956764",
      location: "Chennai,IN",
      posted: "01/08/2021",
    },
    {
      role: "Backend Developer Intern",
      reqID: " 00956764",
      location: "Hyderabad,IN",
      posted: "29/08/2021",
    },
    {
      role: "UI / UX Designer Intern",
      reqID: "00956764",
      location: "Hyderabad,IN",
      posted: "12/08/2021",
    },
    {
      role: "Data Scientist/Analyst Intern",
      reqID: "00956764",
      location: "Indore,IN",
      posted: "01/07/2021",
    },
    {
      role: "SEO Intern or SEO Analyst",
      reqID: "00956764",
      location: "Chennai,IN",
      posted: "29/08/2021",
    },
  ];
  return (
    <>
      <section>
        <div className="table_Mainconatiner">
          <div className="table_SubConatiner">
            {JobsList.map((jobs) => {
              return (
                <div className="table_cardConatiner">
                  <div className="section1">
                    <div className="card_Name">
                      <h2>{jobs.role}</h2>
                      <p>Req ID: {jobs.reqID}</p>
                    </div>
                    <div className="location_Col">
                      <h3>Loction</h3>
                      <p>{jobs.location}</p>
                    </div>
                  </div>
                  <div className="section2">
                    <div className="posted_date">
                      <h3>Posted</h3>
                      <p>{jobs.posted}</p>
                    </div>
                    <div className="buttons">
                      <a href="error.html">
                        <button className="apply" id="btn">
                          Apply Now
                        </button>
                      </a>{" "}
                      <button className="refer" id="btn">
                        Refer
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default JobsList;
