/* eslint-disable react/prop-types */
import { Box, Tab, Tabs, Typography } from "@mui/material";
import { useState } from "react";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function Service() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <div className="flex justify-center my-4 gap-4">
        <Tabs
        value={value}
        onChange={handleChange}
        aria-label="My Services Provider"
        sx={{ display: 'flex', justifyContent: 'center', mt: 4, gap: 4 }}
      >
        
        <Tab label="Tab 1" />
        <Tab label="Tab 2" />
        <Tab label="Tab 3" />
        <Tab label="Tab 3" />
        <Tab label="Tab 3" />
      </Tabs>
      </div>
      
      <div>
        <TabPanel value={value} index={0}>
          Content of Tab 1
        </TabPanel>
        <TabPanel value={value} index={1}>
          Content of Tab 2
        </TabPanel>
        <TabPanel value={value} index={2}>
          Content of Tab 3
        </TabPanel>
        <TabPanel value={value} index={3}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi repellat dicta, numquam eius vel dolorem beatae a ut cupiditate ipsam.
        </TabPanel>
        <TabPanel value={value} index={4}>
          Lorem.
        </TabPanel>
      </div>
    </Box>
  );
}

export default Service;
