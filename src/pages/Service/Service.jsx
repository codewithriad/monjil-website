import { Tab, Tabs, TabsHeader } from "@material-tailwind/react";
import "./service.css";

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
  ];
  return (
    <>
      <div className="bg-bg-color py-6">
        <h2 className="text-primary-color text-center pt-4 text-3xl font-semibold">
          What I do
        </h2>
      </div>
      <Tabs>
        <TabsHeader>
          {data.map(({ label, value }) => (
            <Tab key={value} value={value}>
              {label}
            </Tab>
          ))}
        </TabsHeader>
      </Tabs>
      <div className="bg-bg-color max-w-full lg:px-[12%] grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 lg:gap-4">
        <div className="card">
          <div className="Box">
            <img src="https://images.pexels.com/photos/594610/pexels-photo-594610.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
          </div>
          <div className="details">
            <h2>Lorem ipsum dolor</h2>
            <p>
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur.{" "}
            </p>
          </div>
        </div>

        <div className="card">
          <div className="Box">
            <img src="https://images.pexels.com/photos/3699319/pexels-photo-3699319.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
          </div>
          <div className="details">
            <h2>Lorem ipsum dolor</h2>
            <p>
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur.{" "}
            </p>
          </div>
        </div>

        <div className="card">
          <div className="Box">
            <img src="https://images.pexels.com/photos/598917/pexels-photo-598917.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
          </div>
          <div className="details">
            <h2>Lorem ipsum dolor</h2>
            <p>
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur.{" "}
            </p>
          </div>
        </div>

        <div className="card">
          <div className="Box">
            <img src="https://images.pexels.com/photos/3699319/pexels-photo-3699319.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
          </div>
          <div className="details">
            <h2>Lorem ipsum dolor</h2>
            <p>
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur.{" "}
            </p>
          </div>
        </div>

        <div className="card">
          <div className="Box">
            <img src="https://images.pexels.com/photos/594610/pexels-photo-594610.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
          </div>
          <div className="details">
            <h2>Lorem ipsum dolor</h2>
            <p>
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur.{" "}
            </p>
          </div>
        </div>

        <div className="card">
          <div className="Box">
            <img src="https://images.pexels.com/photos/3699319/pexels-photo-3699319.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
          </div>
          <div className="details">
            <h2>Lorem ipsum dolor</h2>
            <p>
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur.{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
