"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { FaArrowTrendUp } from "react-icons/fa6";
import {
  FaUserMd,
  FaUserSecret,
  FaCheckCircle,
  FaUserGraduate,
} from "react-icons/fa";
import { Circle } from "lucide-react";

const UpperDashboard = () => {
  return (
    <div
      className="p-4 border flex-1 rounded-lg shadow-[0_0_5px] shadow-black grid gap-6 
      grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
    >
      {/* Account Progress */}
      <Card className="shadow-md md:col-span-2 lg:col-span-1 lg:row-span-2">
        <CardHeader>
          <CardTitle>Account Progress</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col p-2 items-center">
            <Progress value={85} />
          </div>

          {/* Steps Completed */}
          <div className="bg-gray-200 px-4 py-2 rounded-xl">
            <p className="text-sm font-medium mb-2">Steps Completed</p>
            <ul className="space-y-2 text-base">
              {["Profile Setup", "Initial Training", "Legal Documents"].map(
                (step, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2 justify-between"
                  >
                    <span className="flex items-center gap-2">
                      <Circle
                        size={10}
                        className="bg-gray-600 rounded-full text-gray-600"
                      />
                      {step}
                    </span>
                    <FaCheckCircle size={18} className="text-green-500" />
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Steps Remaining */}
          <div className="bg-gray-200 px-4 py-2 rounded-xl">
            <p className="text-sm font-medium mb-2">Steps Remaining</p>
            <ul className="space-y-2 text-base">
              {["Financial Integration", "Final Review"].map((step, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <Circle
                    size={10}
                    className="bg-gray-600 rounded-full text-gray-600"
                  />
                  {step}
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Total Franchisees Onboard */}
      <Card className="shadow-md">
        <CardHeader>
          <CardTitle>Total Franchisees Onboard</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4 items-center">
            <p className="text-3xl font-bold">14</p>
            <p className="text-green-600 border-2 flex items-center gap-1 border-green-600 rounded-2xl px-3 py-0.5 text-sm">
              <FaArrowTrendUp /> 7.4%
            </p>
          </div>
          <div className="mt-4 space-y-2">
            <div className="flex w-full justify-evenly items-center gap-4">
              <div className="w-20 h-4 rounded-2xl bg-purple-400"></div>
              <div className="w-18 h-4 rounded-2xl bg-cyan-400"></div>
              <div className="w-32 h-4 rounded-2xl bg-indigo-400"></div>
            </div>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-1 items-center">
                <Circle
                  className="bg-purple-400 rounded-full text-purple-400"
                  size={10}
                />
                <p className="flex w-full justify-between">
                  <span>Stage 1 (Initial Inquiry)</span>{" "}
                  <span className="font-bold">02</span>
                </p>
              </li>
              <li className="flex gap-1 items-center">
                <Circle
                  className="bg-cyan-400 rounded-full text-cyan-400"
                  size={10}
                />
                <p className="flex w-full justify-between">
                  <span>Stage 2 (Document Submission)</span>{" "}
                  <span className="font-bold">07</span>
                </p>
              </li>
              <li className="flex gap-1 items-center">
                <Circle
                  className="bg-indigo-400 rounded-full text-indigo-400"
                  size={10}
                />
                <p className="flex w-full justify-between">
                  <span>Stage 3 (Training)</span>{" "}
                  <span className="font-bold">05</span>
                </p>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Key Insights & Feedback */}
      <Card className="shadow-md">
        <CardHeader>
          <CardTitle>Key Insights & Feedback</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex w-full justify-between items-center">
            <div>
              <p className="text-2xl font-bold">10%</p>
              <p className="text-sm text-muted-foreground">Sales Growth</p>
            </div>
            <div className="flex flex-col items-center gap-1">
              <FaUserGraduate className="text-5xl rounded-full border-2 p-0.5 border-blue-400" />
              <p className="border-2 border-blue-400 rounded-full bg-blue-200 px-3 py-1 text-blue-600 text-sm">
                Top Performer
              </p>
            </div>
          </div>
          <div className="p-2 rounded-md text-sm bg-gray-200">
            <h1 className="font-bold">Feedback</h1>
            <ul className="space-y-1">
              <li className="flex gap-1 items-center">
                <Circle
                  className="text-gray-400 rounded-full bg-gray-400"
                  size={10}
                />
                <p>
                  Franchisees are requesting more detailed training materials.
                </p>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Financial Wellbeing */}
      <Card className="shadow-md">
        <CardHeader>
          <CardTitle>Financial Wellbeing</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between items-center border-b pb-2">
            <div>
              <p className="text-2xl font-semibold">20</p>
              <p className="text-base text-muted-foreground">
                Total Franchisees
              </p>
            </div>
            <p className="text-green-600 border-2 flex items-center gap-1 border-green-600 rounded-2xl px-3 py-0.5 text-sm">
              <FaArrowTrendUp /> 2.1%
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-4 text-center">
            <div className="bg-gray-200 rounded-md p-4">
              <p className="text-sm text-muted-foreground">Target</p>
              <p className="font-bold">$500,000</p>
            </div>
            <div className="bg-gray-200 rounded-md p-4">
              <p className="text-sm text-muted-foreground">Current</p>
              <p className="font-bold">$450,000</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Prospect Leads */}
      <Card className="shadow-md">
        <CardHeader>
          <CardTitle>Prospect Leads</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {[
              {
                name: "Wade Warren",
                icon: <FaUserGraduate />,
                stage: "Initial Inquiry",
              },
              {
                name: "Ava Wright",
                icon: <FaUserSecret />,
                stage: "Initial Inquiry",
              },
              {
                name: "Cody Fisher",
                icon: <FaUserMd />,
                stage: "Initial Inquiry",
              },
            ].map((lead, idx) => (
              <li
                key={idx}
                className="flex items-center justify-between bg-gray-200 px-4 rounded-md py-2"
              >
                <span className="font-medium flex gap-2 items-center">
                  <span className="text-3xl rounded-full border-2 p-0.5 border-blue-400">
                    {lead.icon}
                  </span>
                  {lead.name}
                </span>
                <span className="text-sm text-muted-foreground">
                  Stage: {lead.stage}
                </span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default UpperDashboard;
