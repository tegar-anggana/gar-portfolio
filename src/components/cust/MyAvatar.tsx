import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

export function MyAvatar() {
  return (
    <Avatar className="w-24 h-24">
      <AvatarImage src="https://github.com/shadcn.png" alt="@tegar_anggana" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  )
}
