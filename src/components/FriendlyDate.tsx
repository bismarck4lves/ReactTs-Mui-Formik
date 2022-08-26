import { formatRelative, parseISO } from "date-fns";
import pt from "date-fns/locale/pt";
import React from "react";

interface FriendlyDateProps {
  date: string | Date;
}

const FriendlyDate: React.FC<FriendlyDateProps> = ({
  date,
}: FriendlyDateProps) => {
  const datastate = React.useMemo(() => {
    if (date) {
      const register = typeof date === "string" ? parseISO(date) : date;
      const secondDate = new Date();
      return formatRelative(register, secondDate, { locale: pt });
    } else {
      return "";
    }
  }, []);

  return <>{datastate}</>;
};

export default FriendlyDate;
