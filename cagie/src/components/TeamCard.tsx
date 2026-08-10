import type { TeamMember } from '@/types'

type TeamCardProps = {
  member: TeamMember
}

export function TeamCard({ member }: TeamCardProps) {
  return (
    <li className="overflow-hidden rounded-2xl border border-border bg-white">
      <img src={member.image} alt="" className="aspect-square w-full object-cover" loading="lazy" />
      <div className="p-5">
        <p className="font-semibold text-brand-900">{member.name}</p>
        <p className="text-sm text-accent">{member.role}</p>
        <p className="mt-2 text-sm text-muted">{member.bio}</p>
        {member.isPlaceholder && (
          <p className="mt-2 text-xs font-medium text-amber-800">Profil placeholder</p>
        )}
      </div>
    </li>
  )
}
