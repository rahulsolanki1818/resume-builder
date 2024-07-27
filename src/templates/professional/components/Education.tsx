import { IEducation } from 'src/stores/index.interface';
import { dateParser } from 'src/helpers/utils';
import { Divider } from '@mui/material';

export const Education = ({ education }: { education: IEducation[] }) => {
  return (
    <>
      {education.map((item: IEducation, index: number) => {
        const start = dateParser(item.startDate, 'YYYY');
        const end = dateParser(item.endDate, 'YYYY');
        return (
          <div key={index}>
            <div>
              <div className="flex justify-between items-center">
                <p className="font-medium">{item.studyType}</p>
                <p className="text-xs font-light italic">
                  {start === end ? start : `${start} - ${end}`}
                </p>
              </div>
              <p className="font-light mt-1">{item.area}</p>
              <div className="flex justify-between items-center mt-1">
                <p className="font-light">{item.institution}</p>
                <div className="flex gap-3">
                  <p className="text-xs font-light italic">{item.score}</p>
                </div>
              </div>
            </div>
            {education.length - 1 != index ? (
              <div className="p-2.5">
                <Divider color={'yellowgreen'} />
              </div>
            ) : null}
          </div>
        );
      })}
    </>
  );
};
