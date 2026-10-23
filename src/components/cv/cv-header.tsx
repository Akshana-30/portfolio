import Image from "next/image";
import { StaggerItem } from "@/components/motion";
import { profile } from "@/content";
import { stripProtocol, telHref } from "@/lib/format";

const CONTACTS: [label: string, value: string, href?: string][] = [
  ["tel", profile.phone, telHref(profile.phone)],
  ["mail", profile.email, `mailto:${profile.email}`],
  ["in", stripProtocol(profile.linkedin), profile.linkedin],
  ["gh", stripProtocol(profile.github), profile.github],
  ["loc", profile.location],
];

export function CvHeader() {
  const nameParts = profile.name.split(" ");
  const lastName = nameParts.pop();

  return (
    <StaggerItem className="relative overflow-hidden rounded-3xl border bg-card p-6 sm:p-8 md:col-span-2 print:col-span-2 print:rounded-xl print:p-5">
      <div
        aria-hidden
        className="absolute -top-24 -right-24 size-72 rounded-full bg-primary/15 blur-3xl print:hidden"
      />

      <div className="relative flex flex-col-reverse gap-6 sm:flex-row sm:items-center sm:justify-between print:flex-row print:items-center">
        <div className="min-w-0">
          <p className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
            <span className="size-1.5 shrink-0 rounded-full bg-emerald-500" />
            {profile.availability.toLowerCase()}
          </p>
          <h1 className="mt-3 text-4xl leading-[1.05] font-bold tracking-tight sm:text-5xl print:text-4xl">
            {nameParts.join(" ")}
            <br />
            <span className="text-brand-2">{lastName}</span>
          </h1>
          <p className="mt-3 text-lg font-medium">
            {profile.role} <span className="font-mono text-sm text-primary">{profile.tagline}</span>
          </p>

          <dl className="mt-5 grid gap-x-8 gap-y-2 text-sm sm:grid-cols-2">
            {CONTACTS.map(([label, value, href]) => (
              <div key={label} className="flex min-w-0 items-center gap-3">
                <dt className="w-11 shrink-0 rounded-md bg-primary/10 py-0.5 text-center font-mono text-xs text-primary">
                  {label}
                </dt>
                <dd className="truncate">
                  {href ? (
                    <a href={href} className="hover:text-primary hover:underline">
                      {value}
                    </a>
                  ) : (
                    value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative mx-auto shrink-0 self-center sm:mr-6">
          <div aria-hidden className="absolute -top-4 -left-4 size-12 rounded-full bg-brand-2/40" />
          <div
            aria-hidden
            className="absolute inset-0 translate-x-3 translate-y-3 rotate-3 rounded-2xl bg-brand-2"
          />
          {/* Zoomed slightly and anchored on the face so it sits in the middle of the frame. */}
          <div className="relative size-40 overflow-hidden rounded-2xl sm:size-44 print:size-32">
            <Image
              src={profile.photo}
              alt={profile.name}
              width={1200}
              height={1600}
              priority
              className="size-full origin-[50%_45%] scale-110 object-cover object-[50%_65%]"
            />
          </div>
        </div>
      </div>
    </StaggerItem>
  );
}
