import {FC, memo, useCallback} from 'react';

import {PublicationsItem} from '../../../data/dataDef';

const PublicationsItem: FC<{item: PublicationsItem}> = memo(({item}) => {
  const {title, linkurl, authors, content} = item;
  return (
    <div className="flex flex-col pb-8 text-center last:pb-0 md:text-left">
      <div className="flex flex-col pb-4">
        <h2 className="text-xl font-bold">
          <PaperLink href={linkurl} title={title} />
        </h2>
        <div className="flex items-center justify-center gap-x-2 md:justify-start">
          <span className="flex-1  font-medium italic sm:flex-none">{authors}</span>
        </div>
      </div>
      {content}
    </div>
  );
});

const PaperLink: FC<{href: string; title: string}> = memo(({href, title}) => {
  const openPaper = useCallback(() => {
    window.open(href, '_blank', 'noopener,noreferrer');
  }, [href]);

  return (
    <button
      aria-label={`Open ${title}`}
      className="cursor-pointer border-0 bg-transparent p-0 text-center text-xl font-bold text-blue-500 underline hover:text-blue-700 md:text-left"
      onClick={openPaper}
      type="button">
      {title}
    </button>
  );
});

PaperLink.displayName = 'PaperLink';
PublicationsItem.displayName = 'PublicationsItem';
export default PublicationsItem;
