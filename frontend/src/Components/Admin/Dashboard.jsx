import React, { useEffect } from "react";
import {
  Box,
  Flex,
  Heading,
  Table,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { getOrders } from "../../redux/admin/admin.actions";
import BreadCrumbUtils from "../../utils/BreadCrumb";
import { Chart } from "react-google-charts";
import Headings from "./Headings";
const Dashboard = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOrders());
  }, []);

  const links = [
    {
      title: "dashboard",
      link: "/admin/dashboard",
    },
  ];
  const pou = [
    {
      title: "Products",
      quantity: 9,
      bg: "#d15c5e",
    },
    {
      title: "Orders",
      quantity: 2,
      bg: "#c27951",
    },
    {
      title: "Users",
      quantity: 5,
      bg: "#5197c2",
    },
  ];

  const data = [
    ["Initial Amount", "Amount Earned"],
    [0, 200],
    [1, 60003],
    [2, 7000],
  ];
  const options = {
    chart: {
      title: "Daily Earnings  Till now",
      subtitle: "in Indian Rupee (₹)",
    },
  };

  return (
    <>
      <Box ml={"8"}>
        <Box maxW={"md"}>
          <BreadCrumbUtils data={links} />
        </Box>
        <Box mt={4} maxW={"95%"}>
          <Box
            display={"flex"}
            alignItems={"center"}
            flexDir="column"
            color={"white"}
            backgroundColor={"#cf67ad"}
            fontSize={"md"}
            p={"2"}
            fontWeight={"medium"}
          >
            <Text>Total Amount</Text>
            <Text>{`₹${200}`}</Text>
          </Box>
        </Box>
        <Flex
          justifyContent={"center"}
          alignItems={"center"}
          gap={"6"}
          flexWrap={"wrap"}
          mt={"4"}
        >
          {pou.map((el, i) => (
            <Flex
              backgroundColor={el.bg}
              shadow={"md"}
              w="150px"
              h={"150px"}
              borderRadius={"50%"}
              key={i}
              justifyContent="center"
              alignItems="center"
              color="white"
              flexDir={"column"}
            >
              <Text fontWeight="bold" fontSize={"xl"}>
                {el.title}
              </Text>
              <Text fontWeight="bold" fontSize={"xl"}>
                {el.quantity}
              </Text>
            </Flex>
          ))}
        </Flex>
        <Box width={"95%"} mt="20px">
          <Chart
            chartType="Line"
            width="100%"
            height="400px"
            data={data}
            options={options}
          />
        </Box>
        <Box display={"flex"} alignItems="flex-start">
          <Chart
            chartType="PieChart"
            width="100%"
            height="400px"
            data={[
              ["Task", "Hours per Day"],
              ["Stock", 11],
              ["Out of Stock", 2],
            ]}
            options={{
              title: "InStock | Out of Stock",
              pieHole: 0.4,
              is3D: false,
            }}
          />
        </Box>
        <Headings title={"Recent Orders"} />

        <Box
          flexDirection={"column"}
          display={"flex"}
          gap={"10"}
          color={"white"}
          w={"100%"}
        >
          <Table>
            <Thead>
              <Tr>
                <Th>ID</Th>
                <Th>User</Th>
                <Th>Shipping Address</Th>
                <Th>No. of Items</Th>
                <Th>Order Status</Th>
                <Th>Total Price</Th>
              </Tr>
            </Thead>
            <Tbody>
              {/* {topProducts?.map((product, i) => (
                <ProductRow key={i} {...product} />
              ))} */}
            </Tbody>
          </Table>
        </Box>
      </Box>
    </>
  );
};

export default Dashboard;
