import {
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
} from "@material-tailwind/react";
import Card from "../../Shared/Components/Card/Card";

// import about1 from 'https://i.ibb.co/1sZ0NZ2/1.jpg';

const Service = () => {
  const data = [
    {
      label: "Motion",
      value: "Motion",
      images: [
        "https://i.ibb.co/5YywmzK/about.jpg",
        "https://i.ibb.co/5xCHkd5/hero.png",
        "https://i.ibb.co/1sZ0NZ2/1.jpg",
        "https://i.ibb.co/hYQXDnV/2.jpg",
      ],
    },
    {
      label: "Premium Pro",
      value: "Premium Pro",
      images: [
        "https://i.ibb.co/N9Wg9Qp/hero.jpg",
        "https://i.ibb.co/5YywmzK/about.jpg",
        "https://i.ibb.co/5xCHkd5/hero.png",
        "https://i.ibb.co/1sZ0NZ2/1.jpg",
        "https://i.ibb.co/hYQXDnV/2.jpg",
      ],
    },
    {
      label: "Photoshop",
      value: "Photoshop",
      images: [
        "https://i.ibb.co/1sZ0NZ2/1.jpg",
        "https://i.ibb.co/5xCHkd5/hero.png",
        "https://i.ibb.co/1sZ0NZ2/1.jpg",
        "https://i.ibb.co/hYQXDnV/2.jpg",
      ],
    },
    {
      label: "XD",
      value: "XD",
      images: [
        "https://i.ibb.co/5xCHkd5/hero.png",
        "https://i.ibb.co/1sZ0NZ2/1.jpg",
        "https://i.ibb.co/hYQXDnV/2.jpg",
      ],
    },
    {
      label: "Illustrator",
      value: "Illustrator",
      images: [
        "https://i.ibb.co/5xCHkd5/hero.png",
        "https://i.ibb.co/N9Wg9Qp/hero.jpg",
        "https://i.ibb.co/1sZ0NZ2/1.jpg",
      ],
    },
    {
      label: "InDesign",
      value: "InDesign",
      images: [
        "https://i.ibb.co/1sZ0NZ2/1.jpg",
        "https://i.ibb.co/N9Wg9Qp/hero.jpg",
        "https://i.ibb.co/hYQXDnV/2.jpg",
      ],
    },
  ];
  return (
    <>
      <div className="w-full h-screen overflow-hidden bg-dark-color">
        <div className="cardTitle flex justify-center my-8">
          <h3 className="text-text-color text-3xl font-semibold">
            Our <span className="text-primary-color">Projects</span>
          </h3>
        </div>
        {/* My Project container */}

        <Tabs id="custom-animation" value="Motion">
          <TabsHeader>
            {data.map(({ label, value }) => (
              <Tab key={value} value={value}>
                {label}
              </Tab>
            ))}
          </TabsHeader>

          <TabsBody
            animate={{
              initial: { y: 250 },
              mount: { y: 0 },
              unmount: { y: 250 },
            }}
          >
            {data.map(({ value, images }) => (
              <TabPanel key={value} value={value}>
                <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 md:gap-4 space-y-4">
                  {images.map((image, index) => (
                    <Card key={index} image={image} />
                  ))}
                </div>
              </TabPanel>
            ))}
          </TabsBody>
        </Tabs>
      </div>
    </>
  );
};

export default Service;
