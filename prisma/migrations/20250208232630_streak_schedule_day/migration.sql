-- AlterTable
ALTER TABLE "Habit" ADD COLUMN     "streak" INTEGER NOT NULL DEFAULT 0;

-- CreateTable
CREATE TABLE "ScheduledDay" (
    "id" TEXT NOT NULL,
    "habitId" TEXT NOT NULL,
    "weekday" INTEGER NOT NULL,
    "completed" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ScheduledDay_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ScheduledDay_habitId_weekday_key" ON "ScheduledDay"("habitId", "weekday");

-- AddForeignKey
ALTER TABLE "ScheduledDay" ADD CONSTRAINT "ScheduledDay_habitId_fkey" FOREIGN KEY ("habitId") REFERENCES "Habit"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
