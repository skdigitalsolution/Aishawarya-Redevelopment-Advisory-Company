import { useCountUp } from '../../hooks/useCountUp';
import Icon from './Icon';
/** @param {{stat: {value: number, suffix: string, label: string, icon: string}}} props Animated metric. */
export default function StatCounter({ stat }) {
  const { ref, value } = useCountUp(stat.value);
  return (
    <div ref={ref} className="flex min-w-0 items-center gap-3 px-4 py-5">
      <Icon name={stat.icon} />
      <div>
        <p className="text-2xl font-bold text-white" aria-label={`${stat.value}${stat.suffix}`}>
          <span aria-hidden="true">
            {value}
            {stat.suffix}
          </span>
        </p>
        <p className="mt-1 text-xs text-white/90">{stat.label}</p>
      </div>
    </div>
  );
}
