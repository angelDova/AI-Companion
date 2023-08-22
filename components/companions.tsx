import { Companion } from "@prisma/client";
import Image from "next/image";
import { Card, CardHeader } from "./ui/card";
import Link from "next/link";

interface CompanionProps {
  data: (Companion & {
    _count: {
      messages: number;
    };
  })[];
}

export const Companiuons = ({ data }: CompanionProps) => {
  if (data.length === 0) {
    return (
      <div className="pt-10 flex flex-col items-center justify-center space-y-3">
        <div className="relative w-60 h-60">
          <Image fill className="grayscale" alt="Empty" src="/empty.png" />
        </div>
        <p className="text-sm text-muted-foreground">companions not found!</p>
      </div>
    );
  }
  return (
    <div className="grid grid-cols-2 sdm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2 pb-10">
      {data.map((item) => (
        <Card
          key={item.id}
          className="bg-primary/10 rounded-xl cursor-pointer hover:opacity-75 transition border-0"
        >
          <Link href={`/chat/${item.id}`}>
            <CardHeader className="flex items-center justify-center text-center text-muted-foreground">
              <div className="relative w-32 h-32">
                <Image
                  src={item.src}
                  alt="Companion"
                  fill
                  className="rounded-xl object-cover"
                />
              </div>
            </CardHeader>
          </Link>
        </Card>
      ))}
    </div>
  );
};