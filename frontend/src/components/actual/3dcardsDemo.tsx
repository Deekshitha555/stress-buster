"use client";
import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";

// Define the props for the component
interface ThreeDCardDemoProps {
  data: {
    image: string;
    title: string;
    description: string;
    link?: string;
  }[];
}

export function ThreeDCardDemo({ data }: ThreeDCardDemoProps) {
  return (
    <div className="flex flex-wrap gap-6 justify-center">
      {data.map((card, index) => (
        <CardContainer key={index} className="inter-var">
          <CardBody className="bg-gray-30 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] bg-gray-900  dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              {card.title}
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              {card.description}
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src={card.image}
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt={card.title}
              />
            </CardItem>
            <div className="flex justify-between items-center mt-20">
              {card.link && (
                <CardItem
                  translateZ={20}
                  as="a"
                  href={card.link}
                  target="__blank"
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                >
                  Play now →
                </CardItem>
              )}
            </div>
          </CardBody>
        </CardContainer>
      ))}
    </div>
  );
}
