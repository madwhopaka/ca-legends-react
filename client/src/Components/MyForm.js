import { React, useState } from "react";
import { Card, Container } from "@material-ui/core";
import { Leftside } from "./Leftside.js";
import { Rightside } from "./Rightside.js";
import parse from "html-react-parser" ;
import "./form.css";

export const MyForm = () => {
  var details;

  var isFirst = 0;
  var Resp;
  const [data, setData] = useState(null);
  if (data != null) {
    localStorage.setItem("first", data.first);
    localStorage.setItem("last", data.last);
    localStorage.setItem("email", data.email);
    localStorage.setItem("date", data.date);
    localStorage.setItem("isFirst", 1);
    localStorage.setItem("text", data.text)

    Resp = details;
    console.log(Resp);
  }

  return (
    <div className= "card_container">
      <Container class= "card">
          <Rightside displayCallback={setData} />
          <Leftside />
      </Container>
      <Card className="card2">
        {localStorage.getItem("isFirst") == 1 ? (
          <div>
            <p>
              Name : {localStorage.getItem("first")}{" "}
              {localStorage.getItem("last")}
            </p>
            <p>Email : {localStorage.getItem("email")}</p>
            <p>Date of Birth: {localStorage.getItem("date")}</p>
            <p>Description :{parse(localStorage.getItem('text'))}</p>
          </div>
        ) : (
          <div></div>
        )}
      </Card>
    </div>
  );
};
