import { FluidObject } from 'gatsby-image';
import React from 'react';
import { AiFillEdit as Edit } from 'react-icons/ai';
import tw from 'twin.macro';

import { Icon } from '~/components/atoms/Icon';
import { ProgramTagsLink as Tags } from '~/components/molecules/ProgramTagsLink';

export interface Props {
  /** Cover Image for the article. */
  coverImage?: FluidObject;
  /** The data of the blog post. */
  date: string;
  /** The link to go to edit the page i.e. Gitlab. */
  editLink: string;
  /** How long it'll take to finish the article. */
  readingTime?: string;
  /** The tags/categories related to this blog post. */
  tags?: string[];
  /** The title of this blog post. */
  title: string;
  /** The number of words in the article. */
  words?: string;
}

const PostMeta = ({
  coverImage,
  date,
  editLink,
  readingTime,
  tags,
  title,
  words,
}: Props) => {
  return (
    <MetaContainer>
      <img alt="Cover for article." loading="lazy" src={coverImage?.srcWebp} />
      <Title>
        <Icon className="mr-2" icon="code" label="Blog Post title Icon" />
        {title}
      </Title>
      <Row>
        <Text>
          <Icon
            className="mr-2"
            icon="calendar"
            label="Blog Post date published Icon"
          />
          {date}
        </Text>
        <Text>
          <Icon
            className="mr-2"
            icon="hourglass"
            label="Estimated time to read post icon"
          />
          {readingTime} / {words} words
        </Text>
      </Row>
      {tags && (
        <ListContainer>
          <Icon className="mr-2" icon="tag" label="Tag Icon" />
          {tags.map((category) => (
            <Item key={category}>
              <Tags size="sm" text={category} />
            </Item>
          ))}
        </ListContainer>
      )}
      <EditButton>
        <a href={editLink} rel="noreferrer" target="_blank">
          <Edit className="inline mr-2" size="1.2em" />
          EDIT THIS POST
        </a>
      </EditButton>
    </MetaContainer>
  );
};

const MetaContainer = tw.section`flex flex-col my-10 font-body text-main items-center`;

const Title = tw.div`text-xl lg:text-3xl my-10 font-header text-center break-words px-5`;

const Text = tw.div`text-base my-2 mx-4`;

const Row = tw.div`flex flex-col lg:flex-row justify-between`;

const ListContainer = tw.div`flex justify-center items-center flex-wrap mt-5 mb-10`;

const Item = tw.span`mt-4 lg:mr-1`;

const EditButton = tw.div`flex justify-end w-full mr-10 mt-5 hover:text-primary duration-300 transition`;

export default PostMeta;
