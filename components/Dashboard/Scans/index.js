import { Button, ButtonGroup, Input, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

import SimpleLineChart from "./Charts/SimpleLineChart";
import { parseString } from "xml2js";
import axios from "axios";
import HomeScanPage from "./Charts/HomeScanPage";
import NewScan from "./Charts/NewScan";

function Scans() {
  const [currentScan, setCurrentScan] = useState([]);
  const [currentPage, setCurrentPage] = useState("");

  // useEffect(() => {
  //   const {
  //     $,
  //     debugging,
  //     host,
  //     hosthint,
  //     prescript,
  //     runstats,
  //     scaninfo,
  //     verbose,
  //   } = currentScan;

  //   console.log($);
  //   console.log(debugging);
  //   console.log(host);
  //   console.log(hosthint);
  //   console.log(prescript);
  //   console.log(runstats);
  //   console.log(scaninfo);
  //   console.log(verbose);
  // }, [currentScan]);

  const handleNewScan = async () => {
    const data = await fetch("/exampleScan.json");
    const response = await data.json();

    console.log("full response");
    console.log(response);
    const testy = response.host[0].ports[0].port;
    console.log(testy);

    // const response = await data.json();

    // console.log(response);

    // parseString(response, async (err, result) => {
    //   setCurrentScan(result.nmaprun);
    // });
    // try {
    //   const data = await fetch("./exampleScan");
    //   const response = data.json();
    //   console.log(response);
    // } catch (error) {
    //   console.log(error.message);
    // }
  };

  const handlePageChange = (page) => {
    const testy4 = pageType(page);
    setCurrentPage(testy4);
  };

  const loadFile = () => {};

  const setScanValues = (documentStr) => {};

  const pageType = (type) => {
    let page;
    switch (type) {
      case "history":
        page = <SimpleLineChart />;
        break;
      case "home":
        page = <HomeScanPage />;
        break;
      case "new":
        page = <NewScan />;
        break;
      default:
        page = <SimpleLineChart />;
    }

    return page;
  };

  return (
    <div
      style={{
        width: "60vw",
        height: "80vh",
        maxWidth: "1000px",
      }}
    >
      <Typography variant="h4" sx={{ mb: 4 }}>
        Scans
      </Typography>

      <Button variant="contained" color="secondary" onClick={handleNewScan}>
        TEST
      </Button>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => handlePageChange("history")}
        sx={{ mx: 3 }}
      >
        VIEW SCAN HISTORY DETAILS
      </Button>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => handlePageChange("new")}
      >
        NEW SCAN
      </Button>
      {currentPage}
    </div>
  );
}

export default Scans;
