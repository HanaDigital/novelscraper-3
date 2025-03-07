import { Link } from "@tanstack/react-router";
import { SmallP, TinyP } from "./typography";
import { ReactNode } from "react";
import MissingImageBanner from "@/assets/ui/missing-image-banner.jpg";

type CardUIProps = {
	href: string;
	imageURL: string;
	title: string;
	subTitle: string;
	badge?: ReactNode;
	onClick?: () => void;
}
export function CardUI({ href, imageURL, title, subTitle, badge, onClick = () => { } }: CardUIProps) {
	return (
		<Link
			className={`relative flex flex-col gap-3 group rounded-lg bg-card border p-2 pb-3 hover:border-primary`}
			href={href}
			onClick={onClick}
		>
			{badge && badge}
			<div className="rounded-lg overflow-hidden w-full aspect-auto flex-1 grid place-items-center bg-background border">
				<object className="group-hover:scale-[1.05] transition-transform w-full" data={imageURL} type="image/jpg">
					<img src={MissingImageBanner} alt={`${title}`} />
				</object>
			</div>
			<div className="flex flex-col gap-1">
				<SmallP className="text-ellipsis text-nowrap overflow-hidden">{title}</SmallP>
				<TinyP className="text-muted-foreground text-ellipsis text-nowrap overflow-hidden pb-1">{subTitle}</TinyP>
			</div>
		</Link>
	)
}

type CardGridUIProps = {
	children: ReactNode;
	className?: string;
}
export function CardGridUI({ children, className = "" }: CardGridUIProps) {
	return (
		<div className={`grid grid-cols-1 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 3xl:grid-cols-8 ${className}`}>
			{children}
		</div>
	)
}
