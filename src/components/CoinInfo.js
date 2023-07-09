import axios from "axios";
import React, { useEffect, useState } from "react";
import {CategoryScale} from 'chart.js'; 
import { HistoricalChart } from "../config/api";
// import { HawkState } from '../../banner/HawkContext';
import { ThemeProvider } from "@mui/styles";
import {  } from "@material-ui/core";
import { Line } from "react-chartjs-2";
import { HawkState } from "../HawkContext";

const CoinInfo = ( props ) => {
  const [historicData, setHistoricData] = useState([]);
  const [days, setDays] = useState(1);
  const [flag, setflag] = useState(false);
  const id=props.id

  const { currency } = HawkState();

  // const fetchHistoricalData = async() => {
  //   const {data} = await axios.get(HistoricalChart(coin.id, days, currency ));
  //   setflag(true);
  //   setHistoricData(data.prices);
  // };
  // console.log("data", historicData);

  useEffect(() => {
    axios
      .get(HistoricalChart(id, days, currency))
      .then((res) => {
        setHistoricData(res.data.prices);
      })
      .catch((error) => console.log(error));
  }, []);
  console.log("data", historicData);

  // const useStyles = makeStyles((theme) => ({
  //   container: {
  //     width: "75%",
  //     display: "flex",
  //     flexDirection: "column",
  //     alignItems: "center",
  //     justifyContent: "center",
  //     marginTop: 25,
  //     padding: 40,
  //     [theme.breakpoints.down("md")]: {
  //       width: "100%",
  //       marginTop: 0,
  //       padding: 20,
  //       paddingTop: 0,
  //     },
  //   },

  // }))
  // const classes = useStyles();

  function coinData(coin){
    let date = new Date(coin[0]);
    let time =
      date.getHours() > 12
        ? `${date.getHours() - 12}:${date.getMinutes()} PM`
        : `${date.getHours()}:${date.getMinutes()} AM`;
    return days === 1 ? time : date.toLocaleDateString();
  }

  return (
    <ThemeProvider>
      {/* <div className={classes.container}> */}
      <div className="container">
        {/* chart  */}
        {
          <>  
            <Line
              data={{
                labels: historicData.map((coin) => {
                  return coinData(coin)
                  // let date = new Date(coin[0]);
                  // let time =
                  //   date.getHours() > 12
                  //     ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                  //     : `${date.getHours()}:${date.getMinutes()} AM`;
                  // return days === 1 ? time : date.toLocaleDateString();
                }),

                datasets: [
                  {
                    data: historicData.map((coin) =>  coin[1]),
                    label: `Price ( Past ${days} Days ) in inr}`,
                    borderColor: "#EEBC1D",
                  },
                ],
              }}
              options={{
                elements: {
                  point: {
                    radius: 1,
                  },
                },
              }}
            />
          </>
        }

        {/* button  */}
      </div>
    </ThemeProvider>
  );
};

export default CoinInfo;
